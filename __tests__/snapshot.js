import { render } from "@testing-library/react";
import Users from "../pages/users/user";
import UserPostDetail from "../pages/posts/[id]";

it("render user page unchanged", () => {
  const tree = render(<Users />);
  expect(tree).toMatchSnapshot();
});

it("user's posts is unchanged", () => {
  const userPosts = render(<UserPostDetail />);
  expect(userPosts).toMatchSnapshot();
});
