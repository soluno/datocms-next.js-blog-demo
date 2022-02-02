import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import PostKicker from "./post-kicker";
import PostTitle from "./post-title";

export default function PostHeader({ kicker, title, coverImage, readingTime, date, author }) {
  return (
    <>
      <PostKicker>{kicker}</PostKicker>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
        <CoverImage
          title={title}
          responsiveImage={coverImage.responsiveImage}
        />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-lg">
            <span>Reading-time: {readingTime}</span><br/>
          <Date dateString={date} />
        </div>
      </div>
    </>
  );
}
