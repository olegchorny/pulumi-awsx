// *** WARNING: this file was generated by pulumi-java-gen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package com.pulumi.awsx.ec2;

import com.pulumi.aws.ec2.Eip;
import com.pulumi.aws.ec2.InternetGateway;
import com.pulumi.aws.ec2.NatGateway;
import com.pulumi.aws.ec2.Route;
import com.pulumi.aws.ec2.RouteTable;
import com.pulumi.aws.ec2.RouteTableAssociation;
import com.pulumi.aws.ec2.Subnet;
import com.pulumi.aws.ec2.VpcEndpoint;
import com.pulumi.awsx.Utilities;
import com.pulumi.awsx.ec2.VpcArgs;
import com.pulumi.core.Output;
import com.pulumi.core.annotations.Export;
import com.pulumi.core.annotations.ResourceType;
import com.pulumi.core.internal.Codegen;
import java.lang.String;
import java.util.List;
import javax.annotation.Nullable;

@ResourceType(type="awsx:ec2:Vpc")
public class Vpc extends com.pulumi.resources.ComponentResource {
    /**
     * The EIPs for any NAT Gateways for the VPC. If no NAT Gateways are specified, this will be an empty list.
     * 
     */
    @Export(name="eips", type=List.class, parameters={Eip.class})
    private Output<List<Eip>> eips;

    /**
     * @return The EIPs for any NAT Gateways for the VPC. If no NAT Gateways are specified, this will be an empty list.
     * 
     */
    public Output<List<Eip>> eips() {
        return this.eips;
    }
    /**
     * The Internet Gateway for the VPC.
     * 
     */
    @Export(name="internetGateway", type=InternetGateway.class, parameters={})
    private Output<InternetGateway> internetGateway;

    /**
     * @return The Internet Gateway for the VPC.
     * 
     */
    public Output<InternetGateway> internetGateway() {
        return this.internetGateway;
    }
    @Export(name="isolatedRouteTableIds", type=List.class, parameters={String.class})
    private Output<List<String>> isolatedRouteTableIds;

    public Output<List<String>> isolatedRouteTableIds() {
        return this.isolatedRouteTableIds;
    }
    @Export(name="isolatedSubnetIds", type=List.class, parameters={String.class})
    private Output<List<String>> isolatedSubnetIds;

    public Output<List<String>> isolatedSubnetIds() {
        return this.isolatedSubnetIds;
    }
    /**
     * The NAT Gateways for the VPC. If no NAT Gateways are specified, this will be an empty list.
     * 
     */
    @Export(name="natGateways", type=List.class, parameters={NatGateway.class})
    private Output<List<NatGateway>> natGateways;

    /**
     * @return The NAT Gateways for the VPC. If no NAT Gateways are specified, this will be an empty list.
     * 
     */
    public Output<List<NatGateway>> natGateways() {
        return this.natGateways;
    }
    @Export(name="privateRouteTableIds", type=List.class, parameters={String.class})
    private Output<List<String>> privateRouteTableIds;

    public Output<List<String>> privateRouteTableIds() {
        return this.privateRouteTableIds;
    }
    @Export(name="privateSubnetIds", type=List.class, parameters={String.class})
    private Output<List<String>> privateSubnetIds;

    public Output<List<String>> privateSubnetIds() {
        return this.privateSubnetIds;
    }
    @Export(name="publicRouteTableIds", type=List.class, parameters={String.class})
    private Output<List<String>> publicRouteTableIds;

    public Output<List<String>> publicRouteTableIds() {
        return this.publicRouteTableIds;
    }
    @Export(name="publicSubnetIds", type=List.class, parameters={String.class})
    private Output<List<String>> publicSubnetIds;

    public Output<List<String>> publicSubnetIds() {
        return this.publicSubnetIds;
    }
    /**
     * The Route Table Associations for the VPC.
     * 
     */
    @Export(name="routeTableAssociations", type=List.class, parameters={RouteTableAssociation.class})
    private Output<List<RouteTableAssociation>> routeTableAssociations;

    /**
     * @return The Route Table Associations for the VPC.
     * 
     */
    public Output<List<RouteTableAssociation>> routeTableAssociations() {
        return this.routeTableAssociations;
    }
    /**
     * The Route Tables for the VPC.
     * 
     */
    @Export(name="routeTables", type=List.class, parameters={RouteTable.class})
    private Output<List<RouteTable>> routeTables;

    /**
     * @return The Route Tables for the VPC.
     * 
     */
    public Output<List<RouteTable>> routeTables() {
        return this.routeTables;
    }
    /**
     * The Routes for the VPC.
     * 
     */
    @Export(name="routes", type=List.class, parameters={Route.class})
    private Output<List<Route>> routes;

    /**
     * @return The Routes for the VPC.
     * 
     */
    public Output<List<Route>> routes() {
        return this.routes;
    }
    /**
     * The VPC&#39;s subnets.
     * 
     */
    @Export(name="subnets", type=List.class, parameters={Subnet.class})
    private Output<List<Subnet>> subnets;

    /**
     * @return The VPC&#39;s subnets.
     * 
     */
    public Output<List<Subnet>> subnets() {
        return this.subnets;
    }
    /**
     * The VPC.
     * 
     */
    @Export(name="vpc", type=com.pulumi.aws.ec2.Vpc.class, parameters={})
    private Output<com.pulumi.aws.ec2.Vpc> vpc;

    /**
     * @return The VPC.
     * 
     */
    public Output<com.pulumi.aws.ec2.Vpc> vpc() {
        return this.vpc;
    }
    /**
     * The VPC Endpoints that are enabled
     * 
     */
    @Export(name="vpcEndpoints", type=List.class, parameters={VpcEndpoint.class})
    private Output<List<VpcEndpoint>> vpcEndpoints;

    /**
     * @return The VPC Endpoints that are enabled
     * 
     */
    public Output<List<VpcEndpoint>> vpcEndpoints() {
        return this.vpcEndpoints;
    }
    @Export(name="vpcId", type=String.class, parameters={})
    private Output<String> vpcId;

    public Output<String> vpcId() {
        return this.vpcId;
    }

    /**
     *
     * @param name The _unique_ name of the resulting resource.
     */
    public Vpc(String name) {
        this(name, VpcArgs.Empty);
    }
    /**
     *
     * @param name The _unique_ name of the resulting resource.
     * @param args The arguments to use to populate this resource's properties.
     */
    public Vpc(String name, @Nullable VpcArgs args) {
        this(name, args, null);
    }
    /**
     *
     * @param name The _unique_ name of the resulting resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param options A bag of options that control this resource's behavior.
     */
    public Vpc(String name, @Nullable VpcArgs args, @Nullable com.pulumi.resources.ComponentResourceOptions options) {
        super("awsx:ec2:Vpc", name, args == null ? VpcArgs.Empty : args, makeResourceOptions(options, Codegen.empty()), true);
    }

    private static com.pulumi.resources.ComponentResourceOptions makeResourceOptions(@Nullable com.pulumi.resources.ComponentResourceOptions options, @Nullable Output<String> id) {
        var defaultOptions = com.pulumi.resources.ComponentResourceOptions.builder()
            .version(Utilities.getVersion())
            .build();
        return com.pulumi.resources.ComponentResourceOptions.merge(defaultOptions, options, id);
    }

}