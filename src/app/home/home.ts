
import { Component, signal, OnInit } from '@angular/core';
import { Routes, RouterLink } from '@angular/router';
import { PostServicies } from '../servicies/post-servicies';
import { Post } from '../post/post';
import { ActivePost } from "../active-post/active-post";

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {

  posts: Post[] = []  

  constructor(private postServices: PostServicies){}

  
  ngOnInit(): Post[] {
    this.posts = this.postServices.getPosts()
    return this.posts
  }

}
