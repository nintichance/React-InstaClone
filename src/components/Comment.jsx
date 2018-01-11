import React, {Component} from 'react'
import styled from 'styled-components'

const UserComment = styled.div`
  display:flex;
  width: 100%
`

const CommentWords = styled.p`
  margin-right: 5px;
`

const Image = styled.img`
  border-radius: 100%;
  height:40px;
  width: 40px;
  margin: 10px;
`

class Comment extends Component {
  render() {
    const {comment} = this.props;
    console.log(comment);
    return (
      <UserComment>
        <Image src={comment.profile_pic}/>
        <p>
          <strong>{comment.username}</strong>
          {comment.text}</p>
      </UserComment>
    );
  }
}

export default Comment;
