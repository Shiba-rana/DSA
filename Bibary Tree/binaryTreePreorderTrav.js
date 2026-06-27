class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val
        this.left = left
        this.right = right
    }
}

function preorderTrav(root) {
    let res = []
    preOrder(root, res)
    return res
}

function preOrder(root, res) {
    if(root === null) return 

    res.push(root.val)
    preOrder(root.left, res)
    preOrder(root.right, res)
}

const root = new TreeNode(1)

root.left = new TreeNode(2)
root.right = new TreeNode(3)

root.left.left = new TreeNode(2)
root.right.right = new TreeNode(3)

root.right.right = new TreeNode(6)

const res = preorderTrav(root)

console.log("Preorder Traversal:", res);
