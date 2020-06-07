递归的思维要点：
1. 最大误区：不要进行“人肉递归”；
2. 要找到最近最简方法【也就是最近重复子问题】，将其拆解为可重复解决的问题（重复子问题）；
3. 有些递归的题目可以用数学归纳法找规律。
   
### 递归 代码模版

```
  def recursion(level, param1, param2, ...):
     # recursion terminator
     if level > MAX_LEVEL:
       process_result
return
     # process logic in current level
     process(level, data...)
     # drill down
     self.recursion(level + 1, p1, ...)
     # reverse the current level status if needed
```

### 分治 代码模板
```
def divide_conquer(problem, param1, param2, ...):
  # recursion terminator
  if problem is None:
    print_result
    return
  # prepare data
  data = prepare_data(problem)
  subproblems = split_problem(problem, data)
  # conquer subproblems
  subresult1 = self.divide_conquer(subproblems[0], p1, ...)
  subresult2 = self.divide_conquer(subproblems[1], p1, ...)
  subresult3 = self.divide_conquer(subproblems[2], p1, ...)
  ...
  # process and generate the final result
  result = process_result(subresult1, subresult2, subresult3, ...)
  # revert the current level states
```
### 递归末班总结

1. 找递归终止条件；
2. 处理当前层逻辑；
3. 下探到下一层（因为这一层解决完了肯定要到下一层去）；
4. 清理当前层的状态（这一步有时候需要：比如回溯时，有时候不需要，视具体情况而定）



