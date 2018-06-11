import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'ReceiveWebpartWebPartStrings';
import ReceiveWebpart from './components/ReceiveWebpart';
import { IReceiveWebpartProps } from './components/IReceiveWebpartProps';

export interface IReceiveWebpartWebPartProps {
  description: string;
}

export default class ReceiveWebpartWebPart extends BaseClientSideWebPart<IReceiveWebpartWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IReceiveWebpartProps > = React.createElement(
      ReceiveWebpart,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
