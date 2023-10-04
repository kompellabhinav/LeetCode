class Node {
    constructor(val){
        this.data = val;
        this.next = null;
    }
}


class LinkedList {
    
    constructor() {
        this.head = null;
    }

    insertFirst(new_data){

        /*
        * 1 & 2: Allocate the Node & Put in the data
        */
        var new_node = new Node(new_data);

        // Assign the head value to the next node.
        new_node.next = this.head;

        // Assign the new node value to the head.
        this.head = new_node;
        return;
    }

    insertLast(new_data){

        /*
        * 1 & 2: Allocate the Node & Put in the data
        */
        var new_node = new Node(new_data);

        // 3. If LL is empty, make new node as head
        if(this.head == null){
            this.head = new_node;
            return;
        }

        // 4. Make new node as the last node.
        new_node.next = null;

        // 5. Traverse through the LL
        var last = this.head;
        while (last.next !=null) {
            last=last.next;
        }

        // 6. Make the next of last node equal to the new node
        last.next = new_node;
        return;
    }

    printLL() {
        
        if(!this.head){
            console.log("List is Empty");
            return;
        }

        var temp = this.head;
        while(temp) {
            console.log(temp.data + " -> ");
            temp = temp.next;
        }
    }

    getCount() {

        var temp = this.head;
        var count = 0;
        while(temp != null){
            count++;
            temp = temp.next;
        }
        return count;
    }
}

const myList = new LinkedList();

myList.insertFirst(1);
myList.insertFirst(2);
myList.insertFirst(5);
myList.insertFirst(6);
myList.insertFirst(9);

myList.insertLast(7);

myList.printLL();