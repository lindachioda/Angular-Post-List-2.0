import { Injectable } from '@angular/core';
import { Post } from '../post/post';

@Injectable({
  providedIn: 'root',
})

export class PostServicies {

  posts: Post[] = [
    { id:1,
      body: "Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et vel",
      title: "PRIMO POST",
      active: true,
      type:"news"
    },

    { id:2,
      body: "Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et vel",
      title: "SECONDO POST",
      active: false,
      type:"education"
    },

    { id:3,
      body: "Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et vel",
      title: "TERZO POST",
      active: true,
      type:"news"
    },

    { id:4,
      body: "Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et vel",
      title: "QUARTO POST",
      active: false,
      type:"politic"
    },

    { id:5,
      body: "Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et vel",
      title: "QUINTO POST",
      active: true,
      type:"politic"
    },
  ]

  getPosts(): Post[] {
    console.log(this.posts)
    return this.posts
  }

  updatePosts(id:number) {
    let post = this.posts.find(post=> post.id === id) //cerco l'id dei post dentro l'array, cosi da poter usare post.active!!!!!!
    if(post){
      post.active =!post.active //ora posso gestire chi è active true e farlo diventare active false e viceversa 
    }
  }
  
}
