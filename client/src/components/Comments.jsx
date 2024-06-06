import React from 'react';

const Comments = () => {
  const handleComment = (event) => {
    event.preventDefault()
    const form = event.target;
    const comment = form.comment.value;
    console.log(comment)
    alert(" upcoming Featured ");
}

  return (
    <div className="my-8">
      <h1 className="text-2xl font-bold my-8">Write You Comment Here!</h1>
      <form onSubmit={handleComment}>
        <div className="mb-4">
          <textarea
            type="text"
            name="comment"
            rows="5"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          ></textarea>
        </div>
        <button className="bg-blue-500 py-2 px-4 rounded text-white" type="submit">submit</button>
      </form>
    </div>
  );
};

export default Comments;