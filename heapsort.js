let swap = (arr, index1, index2) => {
  let temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp
}

let sort = (arrToSort) => {
  let arrToSortMod = arrToSort.split(" ")

  let arrLen = arrToSortMod.length

  if (!arrLen) {
    return
  }

  for (let i = Math.floor(arrLen / 2) - 1; i >= 0; i--) {
    validateMaxHeap(arrToSortMod, arrLen, i)
  }

  for (let i = arrLen - 1; i > 0; i--) {
    swap(arrToSortMod, 0, i)
    --arrLen
    validateMaxHeap(arrToSortMod, arrLen, 0)
  }

  return arrToSortMod
}

let validateMaxHeap = (arr, heapSize, parentIndex) => {
  let maxIndex = parentIndex
  let leftChild = parentIndex * 2 + 1
  let rightChild = parentIndex * 2 + 2

  if (leftChild < heapSize && arr[leftChild] > arr[maxIndex]) {
    maxIndex = leftChild
  }
  if (rightChild < heapSize && arr[rightChild] > arr[maxIndex]) {
    maxIndex = rightChild
  }
  if (maxIndex != parentIndex) {
    swap(arr, maxIndex, parentIndex)
    validateMaxHeap(arr, heapSize, maxIndex)
  }
}

//test
sort("ala aba aaa aca")
