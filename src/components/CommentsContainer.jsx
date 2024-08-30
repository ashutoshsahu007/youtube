import React from "react";

const commentsData = [
  {
    name: "Ashutosh sahu",
    text: "lorem ips fajfoahao fhasofhaoifh fhasdofhaofa fhfofhaof ",
    replies: [
      {
        name: "Ashutosh sahu",
        text: "Hello ",
        replies: [],
      },
      {
        name: "Ashutosh sahu",
        text: "Hello ",
        replies: [],
      },
    ],
  },
  {
    name: "Ashutosh sahu",
    text: "He He",
    replies: [
      {
        name: "Ashutosh sahu",
        text: "Hello ",
        replies: [],
      },
      {
        name: "Ashutosh sahu",
        text: "Hello ",
        replies: [
          {
            name: "Ashutosh sahu",
            text: "Hello ",
            replies: [],
          },
          {
            name: "Ashutosh sahu",
            text: "Hello ",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Ashutosh sahu",
    text: "Ho Ho ",
    replies: [
      {
        name: "Ashutosh sahu",
        text: "Hello ",
        replies: [
          {
            name: "Ashutosh sahu",
            text: "Hello ",
            replies: [],
          },
          {
            name: "Ashutosh sahu",
            text: "Hello ",
            replies: [],
          },
        ],
      },
    ],
  },
];

const Comments = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg m-2">
      <img
        className="w-12 h-12 "
        alt="user"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe7qKgRvChw4p7QLmLJ_Vw2PyM11C6ThI6oA&s"
      />
      <div className="px-3 m-1">
        <p className="font-bold mx-2">{name}</p>
        <p className="mx-3">{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comments data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
