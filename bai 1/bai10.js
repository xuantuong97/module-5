const book ={
    title: "Homo",
    author: "Is mine",
    pages : 500,
    displayInfo(){
        console.log(`title: ${this.title}, author: ${this.author}, page: ${this.pages}`)
    }
}
book.displayInfo()
