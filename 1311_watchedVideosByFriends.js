function watchedVideosByFriends(watchedVideos, friends, id, level){
  const targetFriends = findFriend(id,level,friends)
  const targetVideos = findVideos(targetFriends, watchedVideos)
  return targetVideos
}

function findFriend(id,level,friends){//广度查找
  let list = [id]
  const flag =  {}
  flag[id]=1
  while(level--){
    const tempList = []
    list.forEach(function (id) {
      friends[id].forEach(function(idd){
        if(!flag[idd]){
          flag[idd]=1
          tempList.push(idd)
        }
      })
    })
    list = tempList
  }
  return list
}
function findVideos(friends, videos){
  const freq = {}
  friends.forEach(function(id){
    videos[id].forEach(function(video){
      freq[video] = (freq[video] ||0) +1
    })
  })
  const list =  Object.entries(freq).sort(function(a,b){
    return a[1] === b[1] ? (a[0] > b[0] ? 1 : -1) : a[1] - b[1]
  }).map(item=>item[0])
  return list
}

const watchedVideos = [["A", "B"], ["C"], ["B", "C"], ["D"]]
const friends = [[1, 2], [0, 3], [0, 3], [1, 2]]
const id = 0
const level = 1

// const watchedVideos = [["xk","qvgjjsp","sbphxzm"],["rwyvxl","ov"]]
// const friends =[[1],[0]]
// const id = 0
// const level = 1
console.log(watchedVideosByFriends(watchedVideos, friends, id, level))