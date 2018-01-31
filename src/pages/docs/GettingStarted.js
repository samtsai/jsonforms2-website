import React from 'react';
import {Typography, withStyles} from "material-ui";
import MarkdownElement from "../../common/MarkdownElement";
import commonStyles from "../../common/styles";
import {RadiumLink} from "../../common";
/* eslint import/no-webpack-loader-syntax: off */
const init = require('!raw-loader!./listings/init.md');
const installation = require('!raw-loader!./listings/installation.md');
const setupStore = require('!raw-loader!./listings/setupStore.md');
const render = require('!raw-loader!./listings/render.md');
const initAction = require('!raw-loader!./listings/initAction.md');
const imports = require('!raw-loader!./listings/imports.md');
const dataAndSchema = require('!raw-loader!./listings/variables.md');

const styles = () => ({
  link: commonStyles.link,
  list: commonStyles.list,
  code: commonStyles.code,
  display1: commonStyles.display1,
});

const GettingStarted = ({ classes }) => {

  return (
    <div>
      <Typography
        type={'display1'}
        className={classes.display1}
      >
        Getting started
      </Typography>
      <p>
        This section describes how you can get quickly started with JSON Forms.
      </p>
      <ol className={classes.list}>
        <li>
          Clone the <a href="https://github.com/eclipsesource/jsonforms-react-seed" className={classes.link}>seed</a> app with:
          <MarkdownElement
            dir="ltr"
            className={classes.code}
            text={`\`\`\`bash\ngit clone https://github.com/eclipsesource/jsonforms-react-seed.git\n\`\`\``}
          />
        </li>
        <li>
          Install dependencies with:
          <MarkdownElement
            dir="ltr"
            className={classes.code}
            text={`\`\`\`bash\nnpm install\n\`\`\``}
          />
        </li>
        <li>
          Run the app with:
          <MarkdownElement
            dir="ltr"
            className={classes.code}
            text={`\`\`\`bash\nnpm run start\n\`\`\``}
          />
        </li>
      </ol>
      <p>
        For more info about the seed app, please see the corresponding README file of the
        the <a href="https://github.com/eclipsesource/jsonforms-react-seed" className={classes.link}>seed repo</a>.
      </p>
      <p>
        For a more detailed tutorial about the usage of JSON Forms, please
        see <RadiumLink to='/docs/tutorial'>our tutorial</RadiumLink>.
      </p>
    </div>
  );
};

export default withStyles(styles)(GettingStarted);