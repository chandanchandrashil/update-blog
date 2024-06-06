import { useLoaderData } from "react-router-dom";
import BlogMenuPost from "../../components/home/BlogMenuPost";
import Comments from "../../components/Comments";
const SingleBlog = () => {
  const blogs = useLoaderData();
  const { title, image, content, author_image, author_name } = blogs || {};

  return (
    <>
      <div>
        <div className="mt-8">
          <div className="lg:flex gap-4 justify-center items-center">
            <div className=" flex-1">
              <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-12 md:mb-16 lg:mb-24 ">
                {title}
              </h1>
              <div className="flex relative items-center mb-8 gap-4">
                <div>
                  <img
                    className="w-16 border-2 border-blue-500 rounded-lg"
                    src={author_image}
                    alt=""
                  />
                </div>
                <div className=" flex flex-col  ">
                  <span className="text-sm font-semibold">{author_name}</span>

                  <span className="text-sm font-semibold">06-06-2024</span>
                </div>
              </div>
            </div>
            <div className="flex-1  relative">
              <img className="rounded-md" src={image} alt="" />
            </div>
          </div>
          <div className="lg:flex gap-4 mt-16 ">
            <div className="lg:flex-1 border-2 rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
              <p className="text-xl font-extralight">{content}</p>
              <h2 className="text-2xl font-semibold mb-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
              </h2>
              <p className="text-xl font-extralight">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Architecto quas delectus quod ipsam optio? Totam tempore vel
                repellendus, debitis expedita quibusdam, blanditiis eveniet
                dicta tenetur temporibus corporis neque, commodi placeat
                dignissimos sapiente. Tempora quibusdam nulla et velit a iure
                quisquam hic modi optio alias ex labore ab non, architecto illo.
              </p>
              <p className="text-xl font-extralight">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Architecto quas delectus quod ipsam optio?
              </p>
              <h2 className="text-2xl font-semibold mb-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
              <p className="text-xl font-extralight">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Architecto quas delectus quod ipsam optio? Totam tempore vel
                repellendus, debitis expedita quibusdam, blanditiis eveniet
                dicta tenetur temporibus corporis neque, commodi placeat
                dignissimos sapiente. Tempora quibusdam nulla et velit a iure
                quisquam hic modi optio alias ex labore ab non, architecto illo.
              </p>
              <h2 className="text-2xl font-semibold mb-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
              </h2>
              <p className="text-xl font-extralight">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Architecto quas delectus quod ipsam optio? Totam tempore vel
                repellendus, debitis expedita quibusdam, blanditiis eveniet
                dicta tenetur temporibus corporis neque, commodi placeat
                dignissimos sapiente. Tempora quibusdam nulla et velit a iure
                quisquam hic modi optio alias ex labore ab non, architecto illo.
              </p>
              <p className="text-xl font-extralight">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Architecto quas delectus quod ipsam optio?
              </p>
              <Comments/>
            </div>

            <div className="">
              <div className="my-12 mr-auto ml-auto">
                <h1 className="  text-4xl sm:font-bold font-bold">
                  Most Popular
                </h1>
                <h2 className="text-xl font-semibold">
                  Lorem ipsum dolor sit.
                </h2>
              </div>
              <BlogMenuPost />
              <BlogMenuPost />
              <BlogMenuPost />
              <BlogMenuPost />
              <BlogMenuPost />
              <BlogMenuPost />
              <BlogMenuPost />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
