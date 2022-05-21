import { Router } from '@vaadin/router';
import './App';
import { routes } from "./routes";
import {
    fastButton,
    provideFASTDesignSystem,
    neutralPalette,
    PaletteRGB,
    SwatchRGB,
    accentPalette,
    fastTextField,
    StandardLuminance,
    fastAnchor,
    baseLayerLuminance,
    fastCard,
    cardStyles,
    controlCornerRadius,
    fastMenu,
    fastMenuItem,
    fastDivider,
    fastSelect,
    fastOption,
} from "@microsoft/fast-components";
import { parseColorHexRGB } from "@microsoft/fast-colors";
import { css } from "@microsoft/fast-element";

provideFASTDesignSystem()
    .withPrefix("ui")
    .register(
        fastButton(),
        fastAnchor(),
        fastTextField(),
        fastSelect(),
        fastOption(),
        fastMenu(),
        fastMenuItem(),
        fastDivider(),
        fastCard(
            {
                styles: (ctx, def): any => css`
                ${(cardStyles(ctx, def as any) as any)}
                /* add your style augmentations here */
                :host {
                  background-color: var(--neutral-layer-1);
                }
            `
            }
        )
    )
neutralPalette.withDefault(PaletteRGB.create(SwatchRGB.from(parseColorHexRGB("#fdebdc")!)))
accentPalette.withDefault(PaletteRGB.create(SwatchRGB.from(parseColorHexRGB("#ee8567")!)))
baseLayerLuminance.withDefault(StandardLuminance.LightMode);
controlCornerRadius.withDefault(6)

const outlet = document.getElementById('outlet');
export const router = new Router(outlet);
router.setRoutes(routes);
