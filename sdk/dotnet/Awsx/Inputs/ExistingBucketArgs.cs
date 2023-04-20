// *** WARNING: this file was generated by pulumi-gen-awsx. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Awsx.Awsx.Inputs
{

    /// <summary>
    /// Reference to an existing bucket.
    /// </summary>
    public sealed class ExistingBucketArgs : global::Pulumi.ResourceArgs
    {
        /// <summary>
        /// Arn of the bucket. Only one of [arn] or [name] can be specified.
        /// </summary>
        [Input("arn")]
        public Input<string>? Arn { get; set; }

        /// <summary>
        /// Name of the bucket. Only one of [arn] or [name] can be specified.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        public ExistingBucketArgs()
        {
        }
        public static new ExistingBucketArgs Empty => new ExistingBucketArgs();
    }
}
