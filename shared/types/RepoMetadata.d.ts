/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * RepoMetadata
 */
export interface RepoMetadata {
  /**
   * The Dev Library ID of the author(s)
   */
  authorIds?: string[];
  /**
   * GitHub owner/organization
   */
  owner: string;
  /**
   * GitHub repo name
   */
  repo: string;
  /**
   * Display name for the repo
   */
  name: string;
  /**
   * One line description
   */
  shortDescription: string;
  /**
   * Two or three line description
   */
  longDescription: string;
  /**
   * File name of the main markdown file in the repo (ex: README.md)
   */
  content: string;
  /**
   * Array of product-specific tags
   */
  tags: [string, ...string[]];
  /**
   * Information about additional pages in the project other than the main page.
   */
  pages?: {
    /**
     * Name of the page, ex: 'Installation
     */
    name: string;
    /**
     * Path to the markdown file defining the page, ex: 'docs/installing.md'
     */
    path: string;
    [k: string]: unknown;
  }[];
  /**
   * Links to important external project resources
   */
  links?: {
    /**
     * Name of the link
     */
    title: string;
    /**
     * Full external link
     */
    href: string;
    [k: string]: unknown;
  }[];
  [k: string]: unknown;
}
