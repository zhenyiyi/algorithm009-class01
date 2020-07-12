### 布隆过滤器 （Bloom Filter）



##### HashTable的存储方式

   ![image-20200711095319299](https://tva1.sinaimg.cn/large/007S8ZIlgy1ggmspfnaq7j30o20bfmyy.jpg)



##### 布隆过滤器的存储方式

它由一个bit数组和一组Hash算法构成, 一个很长的二进制向量和一系列随机映射函数。可用于判断一个元素是否在一个集合中，查询效率很高。 

- 优点是空间效率和查询时间都远远超过一般的算法
- 缺点是有一定的误识别率和删除困难



示意图

![image-20200711100032291](https://tva1.sinaimg.cn/large/007S8ZIlgy1ggmswptxfij30l308b76m.jpg)



使用场景：

- **网页爬虫对URL的去重，避免爬取相同的URL地址；**
- **反垃圾邮件，从数十亿个垃圾邮件列表中判断某邮箱是否垃圾邮箱（同理，垃圾短信）；**
- **缓存击穿，将已存在的缓存放到布隆中，当黑客访问不存在的缓存时迅速返回避免缓存及DB挂掉。**
- **分布式系统(Map-Reduce) — Hadoop、search engine**

##### 代码实现   bit array

```python
from bitarray import bitarray 
import mmh3 
class BloomFilter: 
	def __init__(self, size, hash_num): 
		self.size = size 
		self.hash_num = hash_num 
		self.bit_array = bitarray(size) 
		self.bit_array.setall(0) 
	def add(self, s): 
		for seed in range(self.hash_num): 
			result = mmh3.hash(s, seed) % self.size 
			self.bit_array[result] = 1 
	def lookup(self, s): 
		for seed in range(self.hash_num): 
			result = mmh3.hash(s, seed) % self.size 
			if self.bit_array[result] == 0: 
				return "Nope" 
		return "Probably" 
```



> https://www.geeksforgeeks.org/bloom-filters-introduction-and-python-implementation/
>
> [SwiftBloomFilter](