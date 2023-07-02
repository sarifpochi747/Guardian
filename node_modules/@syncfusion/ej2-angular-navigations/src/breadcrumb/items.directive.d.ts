import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
/**
 * `e-breadcrumb-item` directive represent a item of the Angular Breadcrumb.
 * It must be contained in a Breadcrumb component(`ejs-breadcrumb`).
 * ```html
 * <ejs-breadcrumb>
 *   <e-breadcrumb-items>
 *    <e-breadcrumb-item text='Home' url='/'></e-breadcrumb-item>
 *    <e-breadcrumb-item text='Index' url='./index'></e-breadcrumb-item>
 *   </e-breadcrumb-items>
 * </ejs-breadcrumb>
 * ```
 */
export declare class BreadcrumbItemDirective extends ComplexBase<BreadcrumbItemDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * Enable or disable the breadcrumb item, when set to true, the breadcrumb item will be disabled.
     * @default false
     */
    disabled: any;
    /**
     * Defines a class/multiple classes separated by a space for the item that is used to include an icon.
     * @default null
     */
    iconCss: any;
    /**
     * Specifies the text content of the Breadcrumb item.
     * @default ''
     */
    text: any;
    /**
     * Specifies the Url of the Breadcrumb item that will be activated when clicked.
     * @default ''
     */
    url: any;
    constructor(viewContainerRef: ViewContainerRef);
}
/**
 * BreadcrumbItem Array Directive
 * @private
 */
export declare class BreadcrumbItemsDirective extends ArrayBase<BreadcrumbItemsDirective> {
    constructor();
}
