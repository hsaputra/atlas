/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { css } from "styled-components";
import { get } from "../utils/theme";

export const styles = {
  body: css`
    font-family: ${get("fonts.ui")};
    font-size: 16px;
    line-height: 1.6;
  `,
  h1: css`
    margin: 40px 0 20px;
    font-family: ${get("fonts.display")};
    font-size: 48px;
    font-weight: 600;
    letter-spacing: -0.02em;
  `,
  h2: css`
    margin: 30px 0 15px;
    line-height: 1.4em;
    font-family: ${get("fonts.display")};
    font-weight: 500;
    font-size: 28px;
    letter-spacing: -0.02em;
  `,
  h3: css`
    margin: 25px 0 10px;
    font-size: 20px;
    font-weight: 400;
  `,
  h4: css`
    margin: 25px 0 10px;
    font-size: 16px;
    font-weight: 400;
  `,
  h5: css`
    margin: 20px 0 10px;
    font-size: 16px;
    font-weight: 400;
  `,
  h6: css`
    margin: 20px 0 10px;
    font-size: 16px;
    font-weight: 400;
    text-transform: uppercase;
  `,
  ol: css`
    padding: 0;
    margin: 10px 0 10px;
  `,
  ul: css`
    padding: 0;
    margin: 10px 0 10px;
  `,
  playground: css`
    padding: 40px;
  `,
  code: css`
    margin: 0 3px;
    border-radius: 3px;
    font-family: ${get("fonts.mono")};
    padding: 2px 5px;
    font-size: 0.8em;
    border: "1px solid rgba(0, 0, 0, 0.02)";
  `,
  pre: css`
    font-family: ${get("fonts.mono")};
    font-size: 1em;
    line-height: 1.8;
  `,
  paragraph: css`
    margin: 10px 0 20px 0;
  `,
  table: css`
    overflow-y: hidden;
    width: 100%;
    font-family: ${get("fonts.mono")};
    font-size: 16px;
    overflow-x: initial;
    display: block;
  `,
  blockquote: css`
    margin: 25px 0;
    padding: 20px;
    font-style: italic;
    font-size: 16px;
  `
};
