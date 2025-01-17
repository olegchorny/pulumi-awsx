// *** WARNING: this file was generated by pulumi-gen-awsx. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

// Export members:
export { DefaultVpcArgs } from "./defaultVpc";
export type DefaultVpc = import("./defaultVpc").DefaultVpc;
export const DefaultVpc: typeof import("./defaultVpc").DefaultVpc = null as any;
utilities.lazyLoad(exports, ["DefaultVpc"], () => require("./defaultVpc"));

export { GetDefaultVpcArgs, GetDefaultVpcResult } from "./getDefaultVpc";
export const getDefaultVpc: typeof import("./getDefaultVpc").getDefaultVpc = null as any;
utilities.lazyLoad(exports, ["getDefaultVpc"], () => require("./getDefaultVpc"));

export { VpcArgs } from "./vpc";
export type Vpc = import("./vpc").Vpc;
export const Vpc: typeof import("./vpc").Vpc = null as any;
utilities.lazyLoad(exports, ["Vpc"], () => require("./vpc"));


// Export enums:
export * from "../types/enums/ec2";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "awsx:ec2:DefaultVpc":
                return new DefaultVpc(name, <any>undefined, { urn })
            case "awsx:ec2:Vpc":
                return new Vpc(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("awsx", "ec2", _module)
