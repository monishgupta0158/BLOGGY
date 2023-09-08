const express = require("express");
const { getAllBlogsController,
     createBlogController, 
     updateBlogController,
      getBlogByIdController,
      deleteBlogController,
      userBlogControlller
     } = require("../controller/blogControlller");

const router = express.Router();



//GET ALL BLOGS
router.get("/all-blog" , getAllBlogsController);

//POST == CREATE BLOG
router.post("/create-blog" , createBlogController);



//PUT -=== UPDATE BLOG
router.put("/update-blog/:id" , updateBlogController);

//GET = == GET BLOG BY ID
router.get("/get-blog/:id" , getBlogByIdController);


//DELETE === DELETE  BLOG
router.delete("/delete-blog/:id" , deleteBlogController);

//GET == USER BLOG
router.get("/user-blog/:id" , userBlogControlller);



module.exports = router;
