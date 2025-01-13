


ex syntax


 package main

import "fmt"

func main() {
	fmt.Println("hello")
	var firstName string = "shravan"
	const lastName string = "gt"
	name := "sgt"
	fmt.Println(firstName)
	fmt.Println(lastName)
	fmt.Println(name)

}

//To install go module
go mod init github repo address(ex:github.com/username/reponame)

//To install fiber
go get github.com/gofiber/fiber/v2

//To live restart after update
go install github.com/cosmtrek/air@latest

Lastly after api end points , check in postman to check api working