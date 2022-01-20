import styled from "styled-components";

export interface Post {
  title: string;
  date: string;
  category: Category;
}

export interface Category {
  name: string;
  color: string;
}
