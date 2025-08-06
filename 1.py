import numpy as np
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix

# ① Load iris
iris = load_iris()
X, y = iris.data.tolist(), iris.target.tolist()

# ② Train/test split
X_train, X_test, y_train, y_test = train_test_split(X, y,
                                                    test_size=0.3,
                                                    random_state=42,
                                                    stratify=y)

# ③ Fit your scratch tree
clf = DecisionTreeScratch(max_depth=4, min_samples_split=5)
clf.fit(X_train, y_train)

# ④ Predict
y_pred = clf.predict(X_test)

# ⑤ Evaluate
print("Accuracy:", accuracy_score(y_test, y_pred))
print(classification_report(y_test, y_pred, target_names=iris.target_names))
print("Confusion matrix:\n", confusion_matrix(y_test, y_pred))
