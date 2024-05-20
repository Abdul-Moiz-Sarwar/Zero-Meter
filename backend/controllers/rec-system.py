import json
import sys
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel


input_data = input()


data = json.loads(input_data)





df = pd.DataFrame(data)


df = df.applymap(lambda x: x.lower() if isinstance(x, str) else x)


features = ['Type', 'Company', 'Model', 'Year', 'EngineSize', 'HorsePower', 'Color', 'Mileage', 'Transmission', 'TopSpeed']
df['combined_features'] = df[features].apply(lambda x: ' '.join(str(x)), axis=1)

tfidf = TfidfVectorizer(stop_words='english')
df = df.applymap(lambda x: x.replace(" ", "") if isinstance(x, str) else x)
tfidf_matrix = tfidf.fit_transform(df['combined_features'])


cosine_sim = linear_kernel(tfidf_matrix, tfidf_matrix)

def recommend_vehicle(vehicle_index):
    
    sim_scores = list(enumerate(cosine_sim[vehicle_index]))
   
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)

    sim_scores = sim_scores[1:4]
    vehicle_indices = [i[0] for i in sim_scores]
    return vehicle_indices


recs = [recommend_vehicle(index) for index in range(len(df))]

print(recs)
