import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;
  render() {
    console.log(this.context);
    return(
      <div>
        Select a langauge
        <i className="flag us hover"
           onClick={() => this.context.onLanguageChange('english')}
        />
        <i className="flag nl hover"
           onClick={() => this.context.onLanguageChange('dutch')}
        />
      </div>
    );
  }
}

export default LanguageSelector;
