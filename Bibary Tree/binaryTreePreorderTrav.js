function preorderTraversal(root) {
    let res = []
    preOrder(root, res)
    return res
}

function preOrder(root, res) {
    if(root === null) return ;

    res.push(root.val)
    preOrder(root.left, res)
    preOrder(root.right, res)
}

