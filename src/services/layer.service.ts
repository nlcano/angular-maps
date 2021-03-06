﻿import { Injectable, NgZone } from '@angular/core';
import { IMarkerOptions } from '../interfaces/imarker-options';
import { IPolygonOptions } from '../interfaces/ipolygon-options';
import { IPolylineOptions } from '../interfaces/ipolyline-options';
import { IMarkerIconInfo } from '../interfaces/imarker-icon-info';
import { Marker } from '../models/marker';
import { Polygon } from '../models/polygon';
import { Polyline } from '../models/polyline';
import { Layer } from '../models/layer';
import { MapLayerDirective } from '../components/map-layer';

/**
 * Abstract class to to define the layer service contract. Must be realized by implementing provider.
 *
 * @export
 * @abstract
 * @class LayerService
 */
@Injectable()
export abstract class LayerService {

    /**
     * Adds a layer to the map.
     *
     * @abstract
     * @param {MapLayerDirective} layer - MapLayerDirective component object.
     * Generally, MapLayerDirective will be injected with an instance of the
     * LayerService and then self register on initialization.
     *
     * @memberof LayerService
     */
    public abstract AddLayer(layer: MapLayerDirective): void;

    /**
     * Adds a marker to the layer.
     *
     * @abstract
     * @param {number} layer - The id of the layer to which to add the marker.
     * @param {IMarkerOptions} options - Marker options defining the marker.
     * @returns {Promise<Marker>} - A promise that when fullfilled contains the an instance of the Marker model.
     *
     * @memberof LayerService
     */
    public abstract CreateMarker(layer: number, options: IMarkerOptions): Promise<Marker>;

    /**
     * Creates an array of unbound markers. Use this method to create arrays of markers to be used in bulk
     * operations.
     *
     * @abstract
     * @param {Array<IMarkerOptions>} options - Marker options defining the markers.
     * @param {IMarkerIconInfo} markerIcon - Optional information to generate custom markers. This will be applied to all markers.
     * @returns {Promise<Array<Marker>>} - A promise that when fullfilled contains the an arrays of the Marker models.
     *
     * @memberof LayerService
     */
    public abstract CreateMarkers(options: Array<IMarkerOptions>, markerIcon?: IMarkerIconInfo): Promise<Array<Marker>>;

    /**
     * Adds a polygon to the layer.
     *
     * @abstract
     * @param {number} layer - The id of the layer to which to add the line.
     * @param {IPolygonOptions} options - Polygon options defining the line.
     * @returns {Promise<Polygon>} - A promise that when fullfilled contains the an instance of the Polygon model.
     *
     * @memberof LayerService
     */
    public abstract CreatePolygon(layer: number, options: IPolygonOptions): Promise<Polygon>;

    /**
     * Creates an array of unbound polygons. Use this method to create arrays of polygons to be used in bulk
     * operations.
     *
     * @param {number} layer - The id of the layer to which to add the polygon.
     * @param {Array<IPolygonOptions>} options - Polygon options defining the polygons.
     * @returns {Promise<Array<Polygon>>} - A promise that when fullfilled contains the an arrays of the Polygon models.
     *
     * @memberof LayerService
     */
    public abstract CreatePolygons(layer: number, options: Array<IPolygonOptions>): Promise<Array<Polygon>>;

    /**
     * Adds a polyline to the layer.
     *
     * @abstract
     * @param {number} layer - The id of the layer to which to add the line.
     * @param {IPolylineOptions} options - Polyline options defining the marker.
     * @returns {Promise<Polyline|Array<Polyline>>} - A promise that when fullfilled contains the an instance of the Polyline (or an
     * array of polylines for complex paths) model.
     *
     * @memberof LayerService
     */
    public abstract CreatePolyline(layer: number, options: IPolygonOptions): Promise<Polyline|Array<Polyline>>;

    /**
     * Creates an array of unbound polylines. Use this method to create arrays of polylines to be used in bulk
     * operations.
     *
     * @param {number} layer - The id of the layer to which to add the polylines.
     * @param {Array<IPolylineOptions>} options - Polyline options defining the polylines.
     * @returns {Promise<Array<Polyline|Array<Polyline>>>} - A promise that when fullfilled contains the an arrays of the Polyline models.
     *
     * @memberof LayerService
     */
    public abstract CreatePolylines(layer: number, options: Array<IPolylineOptions>): Promise<Array<Polyline|Array<Polyline>>>;

    /**
     * Deletes the layer
     *
     * @abstract
     * @param {MapLayerDirective} layer - MapLayerDirective component object for which to retrieve the layer.
     * @returns {Promise<void>} - A promise that is fullfilled when the layer has been removed.
     *
     * @memberof LayerService
     */
    public abstract DeleteLayer(layer: MapLayerDirective): Promise<void>;

    /**
     * Returns the Layer model represented by this layer.
     *
     * @abstract
     * @param {MapLayerDirective | number} layer - MapLayerDirective component object or MapLayerId for which to retrieve the layer model.
     * @returns {Promise<Layer>} - A promise that when resolved contains the Layer model.
     *
     * @memberof LayerService
     */
    public abstract GetNativeLayer(layer: MapLayerDirective|number): Promise<Layer>;
}
