/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Number of recent emoticons to store and display - Number of recent emoticons to store and display */
  "recent-items-number": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `search-emoticons` command */
  export type SearchEmoticons = ExtensionPreferences & {}
  /** Preferences accessible in the `random-emoticon` command */
  export type RandomEmoticon = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `search-emoticons` command */
  export type SearchEmoticons = {}
  /** Arguments passed to the `random-emoticon` command */
  export type RandomEmoticon = {}
}

