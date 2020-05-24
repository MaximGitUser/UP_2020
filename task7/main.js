'use strict';

let arrayP = [25];

for (var i = 0; i < 7; i++){

let post = {
        id: i+1,
        description: ' Post ' + i + ' is uploaded! ',
        createdAt: new Date(),
        author: 'Gomer Simpson',
        photoLink: 'https://i.pinimg.com/originals/bd/19/2f/bd192f2723f7d81013f04903d9e0428b.png',

        hashtags: ['Donuts'],
        likes: ['User' + i]
    };

    arrayP.push(post);
}

for (var i = 7; i < 15; i++){

    let post = {
            id: i+1,
            description: undefined,
            createdAt: new Date(),
            author: 'Abraham Simpson',
            photoLink: 'https://i.ytimg.com/vi/tILvmq1yt0s/maxresdefault.jpg',
    
            hashtags: ['old', 'school'],
            likes: ['User' + i, 'Bard']
        };
    
        arrayP.push(post);
}

 for (var i = 15; i < 25; i++){

    let post = {
        id: i+1,
        description: ' Post ' + i + ' is uploaded! ',
        createdAt: new Date(),
        author: 'Barney Gumble',
        photoLink: 'https://c7.hotpng.com/preview/368/559/618/barney-gumble-homer-simpson-barney-rubble-disco-stu-edna-krabappel-barney-stinson-poster.jpg',
        
        hashtags: ['love you'],
        likes: ['User' + i,]
        };
        
        arrayP.push(post);
}

