var Trie = function () {
  this.trie = {}
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this.trie
  for (let i = 0; i < word.length; i++) {
    const w = word[i]
    if (node[w]) {
      node = node[w]
    } else {
      node[w] = {}
      node = node[w]
    }
  }
  node.end=true
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let node = this.trie
  for (let i = 0; i < word.length; i++) {
    const w = word[i]
    if (node[w]) {
      node = node[w]
    } else {
      return false
    }
  }
  return !!node.end
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let node = this.trie
  for (let i = 0; i < prefix.length; i++) {
    const w = prefix[i]
    if (node[w]) {
      node = node[w]
    } else {
      return false
    }
  }
  return true
};