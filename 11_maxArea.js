/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  if (height.length <= 1) {
      return 0
  }
  let getArea = function(end, start) {
      return (end - start) * Math.min(height[end], height[start])
  }
  let start = 0; 
  let end = height.length - 1;
  let area = getArea(end, start);
  for (let i = 0; i < end; i++) {   
      if(i === 0 || height[i] > height[start]) {
          for (let j = end; j > i; j--) {
              let new_area = getArea(j, i)
              if(getArea(j, i) > area) {
                  start = i
                  end = j
                  area = new_area
              }
          }
      }
  }
  return area
};


/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea2 = function(height) {
  if (height.length <= 1) {
      return 0
  }
  let getArea = function(start, end) {
      return (end - start) * Math.min(height[end], height[start])
  }
  let area = 0;
  for (let i = 0, j = height.length - 1; i < j;) {   
      area = Math.max(getArea(i, j), area)
      if (height[i] < height[j]) {
          i++
      } else {
          j--
      }
  }
  return area
};