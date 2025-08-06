# Import libraries
import numpy as np
import pandas as pd
from scipy import stats
from sklearn.datasets import load_iris
import matplotlib.pyplot as plt
import seaborn as sns

# 1. Load a real dataset (Iris)
iris = load_iris()
df = pd.DataFrame(data=iris.data, columns=iris.feature_names)
df['target'] = iris.target

# 2. Print first few rows
print("🔹 First 5 rows of the dataset:")
print(df.head())

# 3. Descriptive Statistics
print("\n🔹 Descriptive Statistics:")
print(df.describe())

# 4. Mean, Median, Mode for one feature
feature = 'sepal length (cm)'
mean_val = np.mean(df[feature])
median_val = np.median(df[feature])
mode_val = stats.mode(df[feature], keepdims=True)

print(f"\n🔹 Statistics for '{feature}':")
print("Mean   :", mean_val)
print("Median :", median_val)
print("Mode   :", mode_val.mode[0], f"(Count: {mode_val.count[0]})")

# 5. Visualizations
plt.figure(figsize=(12, 5))

# Histogram
plt.subplot(1, 2, 1)
sns.histplot(df[feature], kde=True, bins=20, color='skyblue')
plt.axvline(mean_val, color='red', linestyle='--', label='Mean')
plt.axvline(median_val, color='green', linestyle='--', label='Median')
plt.axvline(mode_val.mode[0], color='purple', linestyle='--', label='Mode')
plt.title(f'Histogram of {feature}')
plt.legend()

# Boxplot
plt.subplot(1, 2, 2)
sns.boxplot(y=df[feature], color='lightgreen')
plt.title(f'Boxplot of {feature}')

plt.tight_layout()
plt.show()

# 6. (Optional) Apply preprocessing or ML later...
