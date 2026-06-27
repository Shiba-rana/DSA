class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val
        this.left = left
        this.right = right
    }
}

function postorderTrav(root) {
    let res = []
    postOrder(root, res)
    return res
}

function postOrder(root, res) {
    if(root === null) return 

    postOrder(root.left, res)
    postOrder(root.right, res)
    res.push(root.val)
}

const root = new TreeNode(1)

root.left = new TreeNode(2)
root.right = new TreeNode(3)

root.left.left = new TreeNode(2)
root.right.right = new TreeNode(3)

root.right.right = new TreeNode(6)

const res = postorderTrav(root)

console.log("PostOrder Traversal:", res);
