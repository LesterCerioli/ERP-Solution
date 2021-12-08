import { Widget } from "./widget.entity";
import { WidgetZoneIds } from "./widgetZoneIds.entity";

export class WidgetInstance {
    constructor(
        public name: string,
        public createdOn: Date,
        public lastestUpdatedOn: Date,
        public publishStart: Date,
        public publishEnd: Date,
        public widgetId: Widget,
        public widgetZoneId: WidgetZoneIds

    ) {

    }
}