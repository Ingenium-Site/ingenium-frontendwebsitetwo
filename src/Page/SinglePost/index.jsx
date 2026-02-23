import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import BannerInnerSection from "../../Components/Banner/Inner";
import BlogPostSection from "../../Components/Blog/SinglePost";

function SinglePostPage(){
    return(
        <>
            <HeadTitle title="Post - INGENIUM" />
            <BannerInnerSection title="Growth Strategies for Digital Businesse" currentPage="Single Post" />
            <BlogPostSection />

        </>
    );
}

export default SinglePostPage;