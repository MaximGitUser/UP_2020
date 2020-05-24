'use strict';

(function() {

    function getPosts(skip = 0, top = 10, property){

        let resutArrayPosts = [];
    
        resutArrayPosts = arrayPosts.filter(function(post, index){
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
    
    function getPost(id){

       for(var i = 0; i < arrayPosts.length; i++){
           if(arrayPosts[i] != undefined) 
           {
            if(arrayPosts[i].id == id)
              return arrayPosts[i];
           }
          
       }
       return undefined;
    }

    function validatePost(post){

        if(post == undefined) return false;
        if(post.description == undefined) return false;
        if(post.description.length > 200) return false;
        if(post.id == undefined) return false;
		if(post.createdAt == undefined) return false;
	    if(post.author == undefined) return false;
		
		return true;
    }

    function addPost(post){

        if(validatePost(post) == false){
            return false;
        }
        
        arrayPosts.push(post);
        return true;
        
    }
    
    function editPost(id, sample){

        let number = 0;
        for(number = 0; number < arrayPosts.length; number++){
            if(arrayPosts[number].id == id){
                break;
            }
        }
        
        if(!validatePost(arrayPosts[number]) || arrayPosts[number].id != id || sample === undefined){
            return false;
        }

        if(sample.description != undefined){
            arrayPosts[number].description = sample.description
        }
        
        if(sample.photoLink != undefined){
            arrayPosts[number].photoLink = sample.photoLink;
        }
        
        if(sample.hashtags != undefined){
            arrayPosts[number].hashtags = sample.hashtags;
        }

        return true;
    }

    function removePost(id){

        let number = 0;
        for(number = 0; number < arrayPosts.length; number++){
            if(arrayPosts[number].id == id){
                break;
            }
        }

        if(arrayPosts[number] == undefined)
            return false;

        if(arrayPosts[number].id != id)
          return false;
        else{
            arrayPosts.splice(number, 1);
            return true;
        }
       
    }


    console.log(" Print all posts:");
    console.log(arrayPosts);

    console.log(" GetPosts from 16 to end ");
    console.log(getPosts(15,30));

    console.log(" GetPosts  with  filter by author from 2 to 10 ");
    console.log(getPosts(2,10, {author:'Gomer Simpson'} ));

    console.log("GetPosts with filter by hashtags from 0 to end");
    console.log(getPosts(0,500, {hashtags: 'love you'}));

    console.log("ValidatePost with correct parameters");
    console.log(validatePost(arrayPosts[5]));

    console.log("ValidatePost with incorrect parameters");
    console.log(validatePost("sdafdasfasffafs"));

    console.log("GetPost function with correct id");
    console.log(getPost(10));

    console.log("GetPost function with incorrect id");
    console.log(getPost(500));

    console.log("Delete with correct id");
    console.log(removePost(20));

    console.log("Delete with incorrect id");
    console.log(removePost(100));

    console.log("AddPost with correct parameter");
    console.log(addPost({
        id: 57,
        description: 'new post',
        createdAt: new Date(),
        author: 'Other',
        photoLink: 'nothig',
        hashtags: ['new'],
        likes: ['']
    }));

    console.log("AddPost with incorrect parameter");
    console.log(addPost("мусор"));

    console.log("EditPost with correct paramaters");
    console.log(editPost('1', { photoLink: 'different ' }));
    console.log(getPost(1));

    console.log("EditPost with incorrect parameters");
    console.log(editPost('500', { photoLink: 'you should not see it' }));
   
}());