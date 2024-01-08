const { log } = require("console");

// Node class
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Binary Search tree class
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // Insert method
    insert(data) {
        var newNode = new Node(data);

        // If the root is null, then make the newNode as the root
        if (this.root === null) {
            this.root = newNode;
        }
        // If it is not null, insert the node in the correct position
        else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            // Go to left
            if (node.left === null) {
                node.left = newNode; // If left node is null, make newNode as left node
            } else {
                this.insertNode(node.left, newNode); // If it is not null, change the root to left node
            }
        } else {
            if (node.right === null) {
                node.right = newNode; // If right node is null, make newNode as right node
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }
    // remove(data)

    // Find Smallest Node
    findMinNode(node) {
        if (node.left === null) {
            return node;
        } else {
            return this.findMinNode(node.left);
        }
    }

    // Get root node
    getRootNode() {
        return this.root;
    }

    // Inorder traversal --> left - root - right
    inorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }

    // Pre-order traversal --> root - left - right
    preorder(node) {
        if (node !== null) {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    // Inorder traversal --> left - right - root
    postorder(node) {
        if (node !== null) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    }

    // Search node in a tree
    search(node, data) {

        // if node does not exist, return null.
        if (node === null) {
            return null;
        } else if (data < node.data) {
            return this.search(node.left, data);    // If data is smaller than current node, go to left
        } else if (data > node.data) {
            return this.search(node.right, data);   // If data is larger than current node, go to right
        } else {
            return node;                            // If data is equal to current node, return data
        }
    }
}

var BST = new BinarySearchTree();

BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

var root = BST.getRootNode();

BST.inorder(root);
console.log("Minimum node is: ", BST.findMinNode(root).data);

console.log("Find number", BST.search(root, 3));