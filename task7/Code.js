'use strict';

class PostsClass{
    _postsArray = [];

    constructor(postsArray){

        for(var i = postsArray.length-1; i > -1; i--)
         this._postsArray.push(postsArray[i]);
    }

    addAll(tposts){

        let nonVaildArray = [];

		for (let i = 0; i < tposts.length; i++) {

			if (PostsClass.validate(tposts[i])) {
				this._postsArray.push(tposts[i]);
            } 
            else {
				nonVaildArray.push(tposts[i]);
			}
		}

		return nonVaildArray;
    }

    clear() {
        let size = this._postsArray.length;
		for (let i = 0; i < size; i++) {
			this._postsArray.pop();
		}
	}

    getPage (skip = 0, top = 10, property){

        let resutArrayPosts = [];
    
        resutArrayPosts = this._postsArray.filter(function(post, index){
             if(index < skip + 2 || index >= skip + top + 2){
                return false;
                }
            else
                return true;
            });

        if(property != undefined){
             resutArrayPosts = resutArrayPosts.filter(function(post){

                if('id' in property)
                 return property.id == post.id;

                 if('description' in property)
                 return property.description == post.description;

                 if('createdAt' in property)
                 return property.createdAt == post.createdAt;

                 if('author' in property)
                 return property.author == post.author;

                 if('photoLink' in property)
                 return property.photoLink == post.photoLink;

                 if('hashtags' in property)
                 return property.hashtags == post.hashtags;

                 if('id' in property)
                 return property.likes == post.likes;
    

                return false;
            });
        }

        resutArrayPosts.sort(function(a,b){
            return new Date(b.date) - new Date(a.date);
        });

        return resutArrayPosts;
    }

    get(id){

        for(var i = 0; i < this._postsArray.length; i++){
            if(this._postsArray[i] != undefined) 
            {
             if(this._postsArray[i].id == id)
               return this._postsArray[i];
            }
           
        }
        return undefined;
    }

    static validate(post){

        if(post == undefined) return false;
        if(post.description == undefined) return false;
        if(post.description.length > 200) return false;
        if(post.id == undefined) return false;
		if(post.createdAt == undefined) return false;
	    if(post.author == undefined) return false;
		
		return true;
    }

    add(post){

        if(PostsClass.validate(post) == false){
            return false;
        }
        
        this._postsArray.push(post);
        return true;
    }

    edit (id, sample){

        let number = 0;
        for(number = 0; number < this._postsArray.length; number++){
            if(this._postsArray[number].id == id){
                break;
            }
        }
        
        if(!PostsClass.validate(this._postsArray[number]) ||  this._postsArray[number].id != id || sample === undefined){
            return false;
        }

        if(sample.description != undefined){
            this._postsArray[number].description = sample.description
        }
        
        if(sample.photoLink != undefined){
            this._postsArray[number].photoLink = sample.photoLink;
        }
        
        if(sample.hashtags != undefined){
            this._postsArray[number].hashtags = sample.hashtags;
        }

        return true;
    }

    remove(id){

        let number = 0;
        for(number = 0; number < this._postsArray.length; number++){
            if(this._postsArray[number].id == id){
                break;
            }
        }

        if(this._postsArray[number] == undefined)
            return false;

        if(this._postsArray[number].id != id)
          return false;
        else{
            this._postsArray.splice(number, 1);
            return true;
        }
       
    }
}
    
    let arrayPosts = new PostsClass(arrayP);

    arrayPosts.clear();
    console.log(" Print all not valid posts:");
    console.log(arrayPosts.addAll(arrayP));

    console.log(" Print all posts:");
    console.log(arrayPosts);

    console.log(" GetPosts from 16 to end ");
    console.log(arrayPosts.getPage(5,30));

    console.log(" GetPosts  with  filter by author from 2 to 10 ");
    console.log(arrayPosts.getPage(2,10, {author:'Gomer Simpson'} ));

    console.log("GetPosts with filter by hashtags from 0 to end");
    console.log(arrayPosts.getPage(0,500, {hashtags: 'love you'}));

    console.log("ValidatePost with correct parameters");
    console.log(PostsClass.validate(arrayP[5]));

    console.log("ValidatePost with incorrect parameters");
    console.log(PostsClass.validate("sdafdasfasffafs"));

    console.log("GetPost function with correct id");
    console.log(arrayPosts.get(22));

    console.log("GetPost function with incorrect id");
    console.log(arrayPosts.get(500));

    console.log("Delete with correct id");
    console.log(arrayPosts.remove(20));

    console.log("Delete with incorrect id");
    console.log(arrayPosts.remove(100));

    console.log("AddPost with correct parameter");
    console.log(arrayPosts.add({
        id: 57,
        description: 'new post',
        createdAt: new Date(),
        author: 'Other',
        photoLink: 'nothig',
        hashtags: ['new'],
        likes: ['']
    }));

    console.log("AddPost with incorrect parameter");
    console.log(arrayPosts.add("мусор"));

    console.log("EditPost with correct paramaters");
    console.log(arrayPosts.edit('1', {  description : 'edited author' }));
    console.log(arrayPosts.get(1));

    console.log("EditPost with incorrect parameters");
    console.log(arrayPosts.edit('500', { photoLink: 'you should not see it' }));

    console.log(" Print all posts:");
    console.log(arrayPosts);
    
   
