'use client'

const Posts = ({ url, height }: { url: string, height?: number }) => {
  const sWidth = (typeof window !== "undefined") && window.screen.width < 500 ? window.screen.width : 500;

  return (
    <div>
      <iframe
        src={url}
        width={sWidth}
        height={height !== undefined ? height : 700}
        style={{ border: "none", overflow: "hidden", backgroundColor: "white" }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" />
    </div >
  );
};

export default Posts;
