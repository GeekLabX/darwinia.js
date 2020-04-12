import { API } from "./api";
import { Config } from "./cfg";

/**
 * @return {API} api - generate API automatically
 */
export async function autoAPI(): Promise<API> {
    const cfg = new Config();
    const seed = await API.seed(cfg.seed);
    return await API.new(seed, cfg.node, cfg.types);
}