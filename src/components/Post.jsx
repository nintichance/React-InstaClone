import React, { Component } from 'react'
import Comment from './Comment'
import { FaHeartO, FaCommentO } from 'react-icons/lib/fa'
import styled from 'styled-components'

const UltraDiv = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`
const PostDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin-top: 30px;
  background-color: #fafafa;
  border-radius: 4px;
  border: .25px solid gray;
`

const User = styled.div`
  display:flex;
  justify-content: flex-start;
  width: 100%;
`

const UserFont = styled.p`
  font-family: "Open Sans";
  font-size: 1.15em;
`

const PostCaptian = styled.div`
  display: flex;
  flex-direction: column;
`
const PostImage = styled.img`
  width: 100%;
`
const Image = styled.img`
  border-radius: 100%;
  height:40px;
  width: 40px;
  margin: 10px;
`

const Likes = styled.div `
  display: flex; 
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`

// const Poster = styled.img`
// `
class Post extends Component{
  render(){
    const { post } = this.props;

    const likes = post.likes.reduce((prev, curr, index) => {
      if (index === 0){
        return `${curr.username}`;
      } else if (index === post.likes.length -1){
        return `${prev} and ${curr.username}`;
      } else {
        return `${prev}, ${curr.username}`;
      }
    },"");
    return(
      <UltraDiv>
        <PostDiv>
          <User>
            <Image src={post.user.profile_pic} alt={post.user.username} />
            <UserFont>{post.user.username}</UserFont>
          </User>
          <PostCaptian>
            <PostImage src={post.image.url} />
            <UserFont>{post.caption}</UserFont>
          </PostCaptian>
          <Likes>
            <div>
            <FaHeartO size={28}/>
            <FaCommentO size={28}/>
            </div>
            <UserFont>{post.likes.length} likes</UserFont>
          </Likes>
          {post.comments.map((comment,i) => <Comment key={i} comment={comment}/>)}
        </PostDiv>
      </UltraDiv>
    )
  }
}

export default Post