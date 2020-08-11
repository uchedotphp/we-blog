<template>
  <div class="blog-post-details-wrapper">
    <div class="post-details-wrapper">
      <div class="post-description-wrapper">
        <h1 class="post-title">An example can be illustrative</h1>
      </div>
      <div class="post-description">
        <p>Given the discourse around this issue, it can be easy to either overestimate the scope of this problem, or discount solving it as irrelevant to the libraries’ mission. Recent studies have shown that the scale and impact of fake news is less significant than much of the initial reporting would suggest. While many people get their news from social media, they do not always consider it their primary source of information (Illing, 2017). Moreover, the basic trends that drive fake news include an increasingly partisan media culture that predates social media (Mittell, 2016). Perhaps most importantly, there is evidence to suggest that when people are presented with “inoculating” messages beforehand, for example information about the scientific consensus or information about the general strategies used in misinformation campaigns, it made a significant positive difference in how they interpreted subsequent information even when it taps into their preexisting identities (Cook et al., 2017; van der Linden et al., 2017). That is to say, the rise of fake news, while a serious problem, does not signal a general inability for people to identify and process facts or that there are no strategies that can effectively counteract these tendencies. Rather it signals something important about how emotions and identities, particularly when exploited by technology platforms, can influence our understanding of new information. Moreover, outside of those emotionally driven, identity-based incentives, there is less of a reason for people to use technology to generate purposefully misleading information.</p>
      </div>

      <!-- comments section -->

      <div class="comments-wrapper">
        <div class="compose-wrapper">
          <div class="textarea-outer-wrapper">
            <div class="textarea-wrapper">
              <div>
                <span class="placeholder" style="color: black">Start the discussion</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SinglePostComponent",
  props: {
    id: Number
  }
};
</script>

<style lang="scss" scoped>
.blog-post-details-wrapper {
  width: 1500px;
  max-width: 100%;
  margin: 0 auto;
  padding: 90px 75px 120px;
}

.blog-post-details-wrapper .post-details-wrapper {
  //   display: flex;
  //   flex-wrap: wrap;
  //   justify-content: center;
  //   align-items: flex-start;
  position: relative;
}

.blog-post-details-wrapper .post-details-wrapper .post-description-wrapper {
  // max-width: 50%;
  width: 870px;
}

.blog-post-details-wrapper
  .post-details-wrapper
  .post-description-wrapper
  .post-title {
  font-size: 30px;
  font-weight: 700;
  line-height: 1.53;
  margin-bottom: 10px;
}

.blog-post-details-wrapper
  .post-details-wrapper
  .post-description-wrapper
  .post-description {
  margin-top: 60px;
  font-size: 16px;
}

.blog-post-details-wrapper
  .post-details-wrapper
  .post-description-wrapper
  .post-description
  p {
  font-size: 16px;
  margin-bottom: 2em;
}

.comments-wrapper {
  max-width: 42%;
  padding-right: 60px;
}

.comments-wrapper .compose-wrapper {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-shrink: 0;
}

.comments-wrapper .compose-wrapper .textarea-outer-wrapper {
  margin: 0 0 0 48px;
  margin-left: 12px;
}

.comments-wrapper .compose-wrapper .textarea-outer-wrapper .textarea-wrapper {
  background: #fff;
  border: 2px solid red;
  position: relative;
  border-radius: 4px;
  margin: 0;
}

.textarea-outer-wrapper .textarea-wrapper::before {
  display: table;
  content: "";
  line-height: 0;
}

.placeholder {
  color: #687a86;
  line-height: 30px;
  font-size: 18px;
  position: absolute;
  top: 7px;
  left: 10px;
  right: 9px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: text;
}
</style>
