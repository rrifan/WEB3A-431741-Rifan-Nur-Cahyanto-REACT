import React from 'react';
import { Col, List, Form, Button, Input, Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';

const { TextArea } = Input;
const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <div>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Add Comment
      </Button>
    </Form.Item>
  </div>
);

class Comnt extends React.Component {
  state = {
    likes: 0,
    dislikes: 0,
    action: null,
    comments: [],
    submitting: false,
    value: '',
  };

  like = () => {
    this.setState({
      likes: 1,
      dislikes: 0,
      action: 'liked',
    });
  };

  dislike = () => {
    this.setState({
      likes: 0,
      dislikes: 1,
      action: 'disliked',
    });
  };

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
        comments: [
          {
            author: 'Jajang D',
            avatar: 'https://thumbs.dreamstime.com/b/icon-user-male-no-face-wearing-blue-t-shirt-43652345.jpg',
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow(),
          },
          ...this.state.comments,
        ],
      });
    }, 1000);
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };
  

  render() {
    const { likes, dislikes, action, comments, submitting, value } = this.state;
    const { TextArea } = Input;
    const actions  = [
      
      <span key="comment-basic-like">
        <Tooltip title="Like">
          {React.createElement(action === 'liked' ? LikeFilled : LikeOutlined, {
            onClick: this.like,
          })}
        </Tooltip>
        <span className="comment-action">{likes}</span>
      </span>,
      <span key=' key="comment-basic-dislike"'>
        <Tooltip title="Dislike">
          {React.createElement(action === 'liked' ? DislikeFilled : DislikeOutlined, {
            onClick: this.dislike,
          })}
        </Tooltip>
        <span className="comment-action">{dislikes}</span>
      </span>,
      

    ];
    
    
    const ExampleComment = ({ children }) => (
      <Comment
        actions={actions}
        author={<a>Jajang D</a>}
        avatar={
          <Avatar
            src="https://thumbs.dreamstime.com/b/icon-user-male-no-face-wearing-blue-t-shirt-43652345.jpg
            "
            alt="Jajang DD"
          />
        }
        content={
          <p>
            Ternyata Jogja memiliki banyak pesona alam,budaya maupun dalam kulinernya.
          </p>
        }
        datetime={
          <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
            <span>{moment().fromNow()}</span>
          </Tooltip>
        }
      >
        <Col span={12}>
        {comments.length > 0 && <CommentList comments={comments} />}
        <Comment
          avatar={
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt="Han Solo"
            />
          }
          content={
            <Editor
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submitting={submitting}
              value={value}
            />
          }
        />
      </Col>
        {children}
        
      </Comment>
      
    );
    
    

    return (
      <ExampleComment>

      </ExampleComment>
    );
  }
}

export default Comnt