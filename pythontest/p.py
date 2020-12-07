import pickle
import numpy as np

filename = 'finalized_model2.sav'
lrc = pickle.load(open(filename, 'rb'))

l=[[0, 1, 0, 0, 0, 0, 1], [0, 1, 0, 0, 0, 1, 1]]

res=lrc.predict(l)
print(res)





