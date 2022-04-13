// *** WARNING: this file was generated by pulumi-gen-awsx. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";

import * as pulumiAws from "@pulumi/aws";

export namespace cloudtrail {
    /**
     * Defines the log group configuration for the CloudWatch Log Group to send logs to.
     */
    export interface LogGroupArgs {
        /**
         * The ARN of the KMS Key to use when encrypting log data.
         */
        kmsKeyId?: pulumi.Input<string>;
        /**
         * Creates a unique name beginning with the specified prefix
         */
        namePrefix?: pulumi.Input<string>;
        /**
         * Specifies the number of days you want to retain log events in the specified log group. Possible values are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1827, 3653, and 0. If you select 0, the events in the log group are always retained and never expire.
         */
        retentionInDays?: pulumi.Input<number>;
        /**
         * A map of tags to assign to the resource. If configured with provider defaultTags present, tags with matching keys will overwrite those defined at the provider-level.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }
}

export namespace cloudwatch {
    /**
     * Log group with default setup unless explicitly skipped.
     */
    export interface DefaultLogGroupArgs {
        /**
         * Arguments to use instead of the default values during creation.
         */
        args?: inputs.cloudwatch.LogGroupArgs;
        /**
         * Identity of an existing log group to use. Cannot be used in combination with `args` or `opts`.
         */
        existing?: inputs.cloudwatch.ExistingLogGroupArgs;
        /**
         * Skip creation of the log group.
         */
        skip?: boolean;
    }

    /**
     * Reference to an existing log group.
     */
    export interface ExistingLogGroupArgs {
        /**
         * Name of the log group.
         */
        name: pulumi.Input<string>;
        /**
         * Region of the log group. If not specified, the provider region will be used.
         */
        region?: pulumi.Input<string>;
    }

    /**
     * The set of arguments for constructing a LogGroup resource.
     */
    export interface LogGroupArgs {
        /**
         * The ARN of the KMS Key to use when encrypting log data. Please note, after the AWS KMS CMK is disassociated from the log group,
         * AWS CloudWatch Logs stops encrypting newly ingested data for the log group. All previously ingested data remains encrypted, and AWS CloudWatch Logs requires
         * permissions for the CMK whenever the encrypted data is requested.
         */
        kmsKeyId?: pulumi.Input<string>;
        /**
         * The name of the log group. If omitted, this provider will assign a random, unique name.
         */
        name?: pulumi.Input<string>;
        /**
         * Creates a unique name beginning with the specified prefix. Conflicts with `name`.
         */
        namePrefix?: pulumi.Input<string>;
        /**
         * Specifies the number of days
         * you want to retain log events in the specified log group.  Possible values are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1827, 3653, and 0.
         * If you select 0, the events in the log group are always retained and never expire.
         */
        retentionInDays?: pulumi.Input<number>;
        /**
         * A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }
}

export namespace ecsx {
    /**
     * Create a TaskDefinition resource with the given unique name, arguments, and options.
     * Creates required log-group and task & execution roles.
     * Presents required Service load balancers if target group included in port mappings.
     */
    export interface FargateServiceTaskDefinitionArgs {
        /**
         * Single container to make a TaskDefinition from.  Useful for simple cases where there aren't
         * multiple containers, especially when creating a TaskDefinition to call [run] on.
         *
         * Either [container] or [containers] must be provided.
         */
        container?: inputs.ecsx.TaskDefinitionContainerDefinitionArgs;
        /**
         * All the containers to make a TaskDefinition from.  Useful when creating a Service that will
         * contain many containers within.
         *
         * Either [container] or [containers] must be provided.
         */
        containers?: {[key: string]: inputs.ecsx.TaskDefinitionContainerDefinitionArgs};
        /**
         * The number of cpu units used by the task. If not provided, a default will be computed based on the cumulative needs specified by [containerDefinitions]
         */
        cpu?: pulumi.Input<string>;
        /**
         * The amount of ephemeral storage to allocate for the task. This parameter is used to expand the total amount of ephemeral storage available, beyond the default amount, for tasks hosted on AWS Fargate. See Ephemeral Storage.
         */
        ephemeralStorage?: pulumi.Input<pulumiAws.types.input.ecs.TaskDefinitionEphemeralStorage>;
        /**
         * The execution role that the Amazon ECS container agent and the Docker daemon can assume.
         * Will be created automatically if not defined.
         */
        executionRole?: inputs.iam.DefaultRoleWithPolicyArgs;
        /**
         * An optional unique name for your task definition. If not specified, then a default will be created.
         */
        family?: pulumi.Input<string>;
        /**
         * Configuration block(s) with Inference Accelerators settings. Detailed below.
         */
        inferenceAccelerators?: pulumi.Input<pulumi.Input<pulumiAws.types.input.ecs.TaskDefinitionInferenceAccelerator>[]>;
        /**
         * IPC resource namespace to be used for the containers in the task The valid values are `host`, `task`, and `none`.
         */
        ipcMode?: pulumi.Input<string>;
        /**
         * A set of volume blocks that containers in your task may use.
         */
        logGroup?: inputs.cloudwatch.DefaultLogGroupArgs;
        /**
         * The amount (in MiB) of memory used by the task.  If not provided, a default will be computed
         * based on the cumulative needs specified by [containerDefinitions]
         */
        memory?: pulumi.Input<string>;
        /**
         * Docker networking mode to use for the containers in the task. Valid values are `none`, `bridge`, `awsvpc`, and `host`.
         */
        networkMode?: pulumi.Input<string>;
        /**
         * Process namespace to use for the containers in the task. The valid values are `host` and `task`.
         */
        pidMode?: pulumi.Input<string>;
        /**
         * Configuration block for rules that are taken into consideration during task placement. Maximum number of `placement_constraints` is `10`. Detailed below.
         */
        placementConstraints?: pulumi.Input<pulumi.Input<pulumiAws.types.input.ecs.TaskDefinitionPlacementConstraint>[]>;
        /**
         * Configuration block for the App Mesh proxy. Detailed below.
         */
        proxyConfiguration?: pulumi.Input<pulumiAws.types.input.ecs.TaskDefinitionProxyConfiguration>;
        /**
         * Set of launch types required by the task. The valid values are `EC2` and `FARGATE`.
         */
        requiresCompatibilities?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Configuration block for runtime_platform that containers in your task may use.
         */
        runtimePlatform?: pulumi.Input<pulumiAws.types.input.ecs.TaskDefinitionRuntimePlatform>;
        skipDestroy?: pulumi.Input<boolean>;
        /**
         * Key-value map of resource tags.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
        /**
         * IAM role that allows your Amazon ECS container task to make calls to other AWS services.
         * Will be created automatically if not defined.
         */
        taskRole?: inputs.iam.DefaultRoleWithPolicyArgs;
        /**
         * Configuration block for volumes that containers in your task may use. Detailed below.
         */
        volumes?: pulumi.Input<pulumi.Input<pulumiAws.types.input.ecs.TaskDefinitionVolume>[]>;
    }

    /**
     * List of container definitions that are passed to the Docker daemon on a container instance
     */
    export interface TaskDefinitionContainerDefinitionArgs {
        command?: pulumi.Input<pulumi.Input<string>[]>;
        cpu?: pulumi.Input<number>;
        dependsOn?: pulumi.Input<pulumi.Input<inputs.ecsx.TaskDefinitionContainerDependencyArgs>[]>;
        disableNetworking?: pulumi.Input<boolean>;
        dnsSearchDomains?: pulumi.Input<pulumi.Input<string>[]>;
        dnsServers?: pulumi.Input<pulumi.Input<string>[]>;
        dockerLabels?: any;
        dockerSecurityOptions?: pulumi.Input<pulumi.Input<string>[]>;
        entryPoint?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The environment variables to pass to a container
         */
        environment?: pulumi.Input<pulumi.Input<inputs.ecsx.TaskDefinitionKeyValuePairArgs>[]>;
        /**
         * The list of one or more files that contain the environment variables to pass to a container
         */
        environmentFiles?: pulumi.Input<pulumi.Input<inputs.ecsx.TaskDefinitionEnvironmentFileArgs>[]>;
        essential?: pulumi.Input<boolean>;
        extraHosts?: pulumi.Input<pulumi.Input<inputs.ecsx.TaskDefinitionHostEntryArgs>[]>;
        firelensConfiguration?: pulumi.Input<inputs.ecsx.TaskDefinitionFirelensConfigurationArgs>;
        healthCheck?: pulumi.Input<inputs.ecsx.TaskDefinitionHealthCheckArgs>;
        hostname?: pulumi.Input<string>;
        /**
         * The image used to start a container. This string is passed directly to the Docker daemon.
         */
        image?: pulumi.Input<string>;
        interactive?: pulumi.Input<boolean>;
        links?: pulumi.Input<pulumi.Input<string>[]>;
        linuxParameters?: pulumi.Input<inputs.ecsx.TaskDefinitionLinuxParametersArgs>;
        logConfiguration?: pulumi.Input<inputs.ecsx.TaskDefinitionLogConfigurationArgs>;
        /**
         * The amount (in MiB) of memory to present to the container. If your container attempts to exceed the memory specified here, the container is killed.
         */
        memory?: pulumi.Input<number>;
        memoryReservation?: pulumi.Input<number>;
        mountPoints?: pulumi.Input<pulumi.Input<inputs.ecsx.TaskDefinitionMountPointArgs>[]>;
        /**
         * The name of a container. Up to 255 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed
         */
        name?: pulumi.Input<string>;
        /**
         * Port mappings allow containers to access ports on the host container instance to send or receive traffic.
         */
        portMappings?: pulumi.Input<pulumi.Input<inputs.ecsx.TaskDefinitionPortMappingArgs>[]>;
        privileged?: pulumi.Input<boolean>;
        pseudoTerminal?: pulumi.Input<boolean>;
        readonlyRootFilesystem?: pulumi.Input<boolean>;
        repositoryCredentials?: pulumi.Input<inputs.ecsx.TaskDefinitionRepositoryCredentialsArgs>;
        resourceRequirements?: pulumi.Input<pulumi.Input<inputs.ecsx.TaskDefinitionResourceRequirementArgs>[]>;
        secrets?: pulumi.Input<pulumi.Input<inputs.ecsx.TaskDefinitionSecretArgs>[]>;
        startTimeout?: pulumi.Input<number>;
        stopTimeout?: pulumi.Input<number>;
        systemControls?: pulumi.Input<pulumi.Input<inputs.ecsx.TaskDefinitionSystemControlArgs>[]>;
        ulimits?: pulumi.Input<pulumi.Input<inputs.ecsx.TaskDefinitionUlimitArgs>[]>;
        user?: pulumi.Input<string>;
        volumesFrom?: pulumi.Input<pulumi.Input<inputs.ecsx.TaskDefinitionVolumeFromArgs>[]>;
        workingDirectory?: pulumi.Input<string>;
    }

    export interface TaskDefinitionContainerDependencyArgs {
        condition?: pulumi.Input<string>;
        containerName?: pulumi.Input<string>;
    }

    export interface TaskDefinitionDeviceArgs {
        containerPath?: pulumi.Input<string>;
        hostPath?: pulumi.Input<string>;
        permissions?: pulumi.Input<pulumi.Input<string>[]>;
    }

    export interface TaskDefinitionEnvironmentFileArgs {
        type?: pulumi.Input<string>;
        value?: pulumi.Input<string>;
    }

    export interface TaskDefinitionFirelensConfigurationArgs {
        options?: any;
        type?: pulumi.Input<string>;
    }

    /**
     * The health check command and associated configuration parameters for the container.
     */
    export interface TaskDefinitionHealthCheckArgs {
        /**
         * A string array representing the command that the container runs to determine if it is healthy.
         */
        command?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * The time period in seconds between each health check execution. You may specify between 5 and 300 seconds. The default value is 30 seconds.
         */
        interval?: pulumi.Input<number>;
        /**
         * The number of times to retry a failed health check before the container is considered unhealthy. You may specify between 1 and 10 retries. The default value is three retries.
         */
        retries?: pulumi.Input<number>;
        /**
         * The optional grace period within which to provide containers time to bootstrap before failed health checks count towards the maximum number of retries. You may specify between 0 and 300 seconds. The startPeriod is disabled by default.
         */
        startPeriod?: pulumi.Input<number>;
        /**
         * The time period in seconds to wait for a health check to succeed before it is considered a failure. You may specify between 2 and 60 seconds. The default value is 5 seconds.
         */
        timeout?: pulumi.Input<number>;
    }

    export interface TaskDefinitionHostEntryArgs {
        hostname?: pulumi.Input<string>;
        ipAddress?: pulumi.Input<string>;
    }

    export interface TaskDefinitionKernelCapabilitiesArgs {
        add?: pulumi.Input<pulumi.Input<string>[]>;
        drop?: pulumi.Input<pulumi.Input<string>[]>;
    }

    export interface TaskDefinitionKeyValuePairArgs {
        name?: pulumi.Input<string>;
        value?: pulumi.Input<string>;
    }

    export interface TaskDefinitionLinuxParametersArgs {
        capabilities?: pulumi.Input<inputs.ecsx.TaskDefinitionKernelCapabilitiesArgs>;
        devices?: pulumi.Input<pulumi.Input<inputs.ecsx.TaskDefinitionDeviceArgs>[]>;
        initProcessEnabled?: pulumi.Input<boolean>;
        maxSwap?: pulumi.Input<number>;
        sharedMemorySize?: pulumi.Input<number>;
        swappiness?: pulumi.Input<number>;
        tmpfs?: pulumi.Input<pulumi.Input<inputs.ecsx.TaskDefinitionTmpfsArgs>[]>;
    }

    export interface TaskDefinitionLogConfigurationArgs {
        logDriver: pulumi.Input<string>;
        options?: any;
        secretOptions?: pulumi.Input<pulumi.Input<inputs.ecsx.TaskDefinitionSecretArgs>[]>;
    }

    export interface TaskDefinitionMountPointArgs {
        containerPath?: pulumi.Input<string>;
        readOnly?: pulumi.Input<boolean>;
        sourceVolume?: pulumi.Input<string>;
    }

    export interface TaskDefinitionPortMappingArgs {
        containerPort?: pulumi.Input<number>;
        hostPort?: pulumi.Input<number>;
        protocol?: pulumi.Input<string>;
        targetGroup?: pulumi.Input<pulumiAws.lb.TargetGroup>;
    }

    export interface TaskDefinitionRepositoryCredentialsArgs {
        credentialsParameter?: pulumi.Input<string>;
    }

    export interface TaskDefinitionResourceRequirementArgs {
        type: pulumi.Input<string>;
        value: pulumi.Input<string>;
    }

    export interface TaskDefinitionSecretArgs {
        name: pulumi.Input<string>;
        valueFrom: pulumi.Input<string>;
    }

    export interface TaskDefinitionSystemControlArgs {
        namespace?: pulumi.Input<string>;
        value?: pulumi.Input<string>;
    }

    export interface TaskDefinitionTmpfsArgs {
        containerPath?: pulumi.Input<string>;
        mountOptions?: pulumi.Input<pulumi.Input<string>[]>;
        size: pulumi.Input<number>;
    }

    export interface TaskDefinitionUlimitArgs {
        hardLimit: pulumi.Input<number>;
        name: pulumi.Input<string>;
        softLimit: pulumi.Input<number>;
    }

    export interface TaskDefinitionVolumeFromArgs {
        readOnly?: pulumi.Input<boolean>;
        sourceContainer?: pulumi.Input<string>;
    }

}

export namespace iam {
    /**
     * Role and policy attachments with default setup unless explicitly skipped or an existing role ARN provided.
     */
    export interface DefaultRoleWithPolicyArgs {
        /**
         * Args to use when creating the role and policies. Can't be specified if `roleArn` is used.
         */
        args?: inputs.iam.RoleWithPolicyArgs;
        /**
         * ARN of existing role to use instead of creating a new role. Cannot be used in combination with `args` or `opts`.
         */
        roleArn?: pulumi.Input<string>;
        /**
         * Skips creation of the role if set to `true`.
         */
        skip?: boolean;
    }

    /**
     * The set of arguments for constructing a Role resource and Policy attachments.
     */
    export interface RoleWithPolicyArgs {
        /**
         * Description of the role.
         */
        description?: pulumi.Input<string>;
        /**
         * Whether to force detaching any policies the role has before destroying it. Defaults to `false`.
         */
        forceDetachPolicies?: pulumi.Input<boolean>;
        /**
         * Configuration block defining an exclusive set of IAM inline policies associated with the IAM role. See below. If no blocks are configured, this provider will not manage any inline policies in this resource. Configuring one empty block (i.e., `inline_policy {}`) will cause the provider to remove _all_ inline policies added out of band on `apply`.
         */
        inlinePolicies?: pulumi.Input<pulumi.Input<pulumiAws.types.input.iam.RoleInlinePolicy>[]>;
        /**
         * Set of exclusive IAM managed policy ARNs to attach to the IAM role. If this attribute is not configured, this provider will ignore policy attachments to this resource. When configured, the provider will align the role's managed policy attachments with this set by attaching or detaching managed policies. Configuring an empty set (i.e., `managed_policy_arns = []`) will cause the provider to remove _all_ managed policy attachments.
         */
        managedPolicyArns?: pulumi.Input<pulumi.Input<string>[]>;
        /**
         * Maximum session duration (in seconds) that you want to set for the specified role. If you do not specify a value for this setting, the default maximum of one hour is applied. This setting can have a value from 1 hour to 12 hours.
         */
        maxSessionDuration?: pulumi.Input<number>;
        /**
         * Name of the role policy.
         */
        name?: pulumi.Input<string>;
        /**
         * Creates a unique friendly name beginning with the specified prefix. Conflicts with `name`.
         */
        namePrefix?: pulumi.Input<string>;
        /**
         * Path to the role. See [IAM Identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) for more information.
         */
        path?: pulumi.Input<string>;
        /**
         * ARN of the policy that is used to set the permissions boundary for the role.
         */
        permissionsBoundary?: pulumi.Input<string>;
        /**
         * ARNs of the policies to attach to the created role.
         */
        policyArns?: string[];
        /**
         * Key-value mapping of tags for the IAM role. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
         */
        tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    }
}