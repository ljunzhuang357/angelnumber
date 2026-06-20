import type { BlogPost } from "./blog";
import { part1 } from "./blog-numbers-1";
import { part2 } from "./blog-numbers-2";
import { part3 } from "./blog-numbers-3";
import { part4 } from "./blog-numbers-4";

export const numberPages: BlogPost[] = [...part1, ...part2, ...part3, ...part4];
