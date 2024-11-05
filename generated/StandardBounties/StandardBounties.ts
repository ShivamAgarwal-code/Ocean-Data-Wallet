// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  EthereumCall,
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt,
  CallResult
} from "@graphprotocol/graph-ts";

export class BountyIssued extends EthereumEvent {
  get params(): BountyIssued__Params {
    return new BountyIssued__Params(this);
  }
}

export class BountyIssued__Params {
  _event: BountyIssued;

  constructor(event: BountyIssued) {
    this._event = event;
  }

  get _bountyId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _creator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _issuers(): Array<Address> {
    return this._event.parameters[2].value.toAddressArray();
  }

  get _approvers(): Array<Address> {
    return this._event.parameters[3].value.toAddressArray();
  }

  get _data(): string {
    return this._event.parameters[4].value.toString();
  }

  get _deadline(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get _token(): Address {
    return this._event.parameters[6].value.toAddress();
  }

  get _tokenVersion(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }
}

export class ContributionAdded extends EthereumEvent {
  get params(): ContributionAdded__Params {
    return new ContributionAdded__Params(this);
  }
}

export class ContributionAdded__Params {
  _event: ContributionAdded;

  constructor(event: ContributionAdded) {
    this._event = event;
  }

  get _bountyId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _contributionId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get _contributor(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get _amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class ContributionRefunded extends EthereumEvent {
  get params(): ContributionRefunded__Params {
    return new ContributionRefunded__Params(this);
  }
}

export class ContributionRefunded__Params {
  _event: ContributionRefunded;

  constructor(event: ContributionRefunded) {
    this._event = event;
  }

  get _bountyId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _contributionId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class ContributionsRefunded extends EthereumEvent {
  get params(): ContributionsRefunded__Params {
    return new ContributionsRefunded__Params(this);
  }
}

export class ContributionsRefunded__Params {
  _event: ContributionsRefunded;

  constructor(event: ContributionsRefunded) {
    this._event = event;
  }

  get _bountyId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _issuer(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _contributionIds(): Array<BigInt> {
    return this._event.parameters[2].value.toBigIntArray();
  }
}

export class BountyDrained extends EthereumEvent {
  get params(): BountyDrained__Params {
    return new BountyDrained__Params(this);
  }
}

export class BountyDrained__Params {
  _event: BountyDrained;

  constructor(event: BountyDrained) {
    this._event = event;
  }

  get _bountyId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _issuer(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _amounts(): Array<BigInt> {
    return this._event.parameters[2].value.toBigIntArray();
  }
}

export class ActionPerformed extends EthereumEvent {
  get params(): ActionPerformed__Params {
    return new ActionPerformed__Params(this);
  }
}

export class ActionPerformed__Params {
  _event: ActionPerformed;

  constructor(event: ActionPerformed) {
    this._event = event;
  }

  get _bountyId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _fulfiller(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _data(): string {
    return this._event.parameters[2].value.toString();
  }
}

export class BountyFulfilled extends EthereumEvent {
  get params(): BountyFulfilled__Params {
    return new BountyFulfilled__Params(this);
  }
}

export class BountyFulfilled__Params {
  _event: BountyFulfilled;

  constructor(event: BountyFulfilled) {
    this._event = event;
  }

  get _bountyId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _fulfillmentId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get _fulfillers(): Array<Address> {
    return this._event.parameters[2].value.toAddressArray();
  }

  get _data(): string {
    return this._event.parameters[3].value.toString();
  }

  get _submitter(): Address {
    return this._event.parameters[4].value.toAddress();
  }
}

export class FulfillmentUpdated extends EthereumEvent {
  get params(): FulfillmentUpdated__Params {
    return new FulfillmentUpdated__Params(this);
  }
}

export class FulfillmentUpdated__Params {
  _event: FulfillmentUpdated;

  constructor(event: FulfillmentUpdated) {
    this._event = event;
  }

  get _bountyId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _fulfillmentId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get _fulfillers(): Array<Address> {
    return this._event.parameters[2].value.toAddressArray();
  }

  get _data(): string {
    return this._event.parameters[3].value.toString();
  }
}

export class FulfillmentAccepted extends EthereumEvent {
  get params(): FulfillmentAccepted__Params {
    return new FulfillmentAccepted__Params(this);
  }
}

export class FulfillmentAccepted__Params {
  _event: FulfillmentAccepted;

  constructor(event: FulfillmentAccepted) {
    this._event = event;
  }

  get _bountyId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _fulfillmentId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get _approver(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get _tokenAmounts(): Array<BigInt> {
    return this._event.parameters[3].value.toBigIntArray();
  }
}

export class BountyChanged extends EthereumEvent {
  get params(): BountyChanged__Params {
    return new BountyChanged__Params(this);
  }
}

export class BountyChanged__Params {
  _event: BountyChanged;

  constructor(event: BountyChanged) {
    this._event = event;
  }

  get _bountyId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _changer(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _issuers(): Array<Address> {
    return this._event.parameters[2].value.toAddressArray();
  }

  get _approvers(): Array<Address> {
    return this._event.parameters[3].value.toAddressArray();
  }

  get _data(): string {
    return this._event.parameters[4].value.toString();
  }

  get _deadline(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class BountyIssuersUpdated extends EthereumEvent {
  get params(): BountyIssuersUpdated__Params {
    return new BountyIssuersUpdated__Params(this);
  }
}

export class BountyIssuersUpdated__Params {
  _event: BountyIssuersUpdated;

  constructor(event: BountyIssuersUpdated) {
    this._event = event;
  }

  get _bountyId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _changer(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _issuers(): Array<Address> {
    return this._event.parameters[2].value.toAddressArray();
  }
}

export class BountyApproversUpdated extends EthereumEvent {
  get params(): BountyApproversUpdated__Params {
    return new BountyApproversUpdated__Params(this);
  }
}

export class BountyApproversUpdated__Params {
  _event: BountyApproversUpdated;

  constructor(event: BountyApproversUpdated) {
    this._event = event;
  }

  get _bountyId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _changer(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _approvers(): Array<Address> {
    return this._event.parameters[2].value.toAddressArray();
  }
}

export class BountyDataChanged extends EthereumEvent {
  get params(): BountyDataChanged__Params {
    return new BountyDataChanged__Params(this);
  }
}

export class BountyDataChanged__Params {
  _event: BountyDataChanged;

  constructor(event: BountyDataChanged) {
    this._event = event;
  }

  get _bountyId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _changer(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _data(): string {
    return this._event.parameters[2].value.toString();
  }
}

export class BountyDeadlineChanged extends EthereumEvent {
  get params(): BountyDeadlineChanged__Params {
    return new BountyDeadlineChanged__Params(this);
  }
}

export class BountyDeadlineChanged__Params {
  _event: BountyDeadlineChanged;

  constructor(event: BountyDeadlineChanged) {
    this._event = event;
  }

  get _bountyId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _changer(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _deadline(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class StandardBounties__bountiesResult {
  value0: BigInt;
  value1: Address;
  value2: BigInt;
  value3: BigInt;
  value4: boolean;

  constructor(
    value0: BigInt,
    value1: Address,
    value2: BigInt,
    value3: BigInt,
    value4: boolean
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromUnsignedBigInt(this.value0));
    map.set("value1", EthereumValue.fromAddress(this.value1));
    map.set("value2", EthereumValue.fromUnsignedBigInt(this.value2));
    map.set("value3", EthereumValue.fromUnsignedBigInt(this.value3));
    map.set("value4", EthereumValue.fromBoolean(this.value4));
    return map;
  }
}

export class StandardBounties__getBountyResultValue0Struct extends EthereumTuple {
  get issuers(): Array<Address> {
    return this[0].toAddressArray();
  }

  get approvers(): Array<Address> {
    return this[1].toAddressArray();
  }

  get deadline(): BigInt {
    return this[2].toBigInt();
  }

  get token(): Address {
    return this[3].toAddress();
  }

  get tokenVersion(): BigInt {
    return this[4].toBigInt();
  }

  get balance(): BigInt {
    return this[5].toBigInt();
  }

  get hasPaidOut(): boolean {
    return this[6].toBoolean();
  }

  get fulfillments(): Array<EthereumTuple> {
    return this[7].toTupleArray<undefined>();
  }

  get contributions(): Array<EthereumTuple> {
    return this[8].toTupleArray<undefined>();
  }
}

export class StandardBounties extends SmartContract {
  static bind(address: Address): StandardBounties {
    return new StandardBounties("StandardBounties", address);
  }

  callStarted(): boolean {
    let result = super.call("callStarted", []);

    return result[0].toBoolean();
  }

  try_callStarted(): CallResult<boolean> {
    let result = super.tryCall("callStarted", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  numBounties(): BigInt {
    let result = super.call("numBounties", []);

    return result[0].toBigInt();
  }

  try_numBounties(): CallResult<BigInt> {
    let result = super.tryCall("numBounties", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", []);

    return result[0].toAddress();
  }

  try_owner(): CallResult<Address> {
    let result = super.tryCall("owner", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  metaTxRelayer(): Address {
    let result = super.call("metaTxRelayer", []);

    return result[0].toAddress();
  }

  try_metaTxRelayer(): CallResult<Address> {
    let result = super.tryCall("metaTxRelayer", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  bounties(param0: BigInt): StandardBounties__bountiesResult {
    let result = super.call("bounties", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);

    return new StandardBounties__bountiesResult(
      result[0].toBigInt(),
      result[1].toAddress(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBoolean()
    );
  }

  try_bounties(param0: BigInt): CallResult<StandardBounties__bountiesResult> {
    let result = super.tryCall("bounties", [
      EthereumValue.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      new StandardBounties__bountiesResult(
        value[0].toBigInt(),
        value[1].toAddress(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBoolean()
      )
    );
  }

  tokenBalances(param0: BigInt, param1: BigInt): boolean {
    let result = super.call("tokenBalances", [
      EthereumValue.fromUnsignedBigInt(param0),
      EthereumValue.fromUnsignedBigInt(param1)
    ]);

    return result[0].toBoolean();
  }

  try_tokenBalances(param0: BigInt, param1: BigInt): CallResult<boolean> {
    let result = super.tryCall("tokenBalances", [
      EthereumValue.fromUnsignedBigInt(param0),
      EthereumValue.fromUnsignedBigInt(param1)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  issueBounty(
    _sender: Address,
    _issuers: Array<Address>,
    _approvers: Array<Address>,
    _data: string,
    _deadline: BigInt,
    _token: Address,
    _tokenVersion: BigInt
  ): BigInt {
    let result = super.call("issueBounty", [
      EthereumValue.fromAddress(_sender),
      EthereumValue.fromAddressArray(_issuers),
      EthereumValue.fromAddressArray(_approvers),
      EthereumValue.fromString(_data),
      EthereumValue.fromUnsignedBigInt(_deadline),
      EthereumValue.fromAddress(_token),
      EthereumValue.fromUnsignedBigInt(_tokenVersion)
    ]);

    return result[0].toBigInt();
  }

  try_issueBounty(
    _sender: Address,
    _issuers: Array<Address>,
    _approvers: Array<Address>,
    _data: string,
    _deadline: BigInt,
    _token: Address,
    _tokenVersion: BigInt
  ): CallResult<BigInt> {
    let result = super.tryCall("issueBounty", [
      EthereumValue.fromAddress(_sender),
      EthereumValue.fromAddressArray(_issuers),
      EthereumValue.fromAddressArray(_approvers),
      EthereumValue.fromString(_data),
      EthereumValue.fromUnsignedBigInt(_deadline),
      EthereumValue.fromAddress(_token),
      EthereumValue.fromUnsignedBigInt(_tokenVersion)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  getBounty(_bountyId: BigInt): StandardBounties__getBountyResultValue0Struct {
    let result = super.call("getBounty", [
      EthereumValue.fromUnsignedBigInt(_bountyId)
    ]);

    return result[0].toTuple() as StandardBounties__getBountyResultValue0Struct;
  }

  try_getBounty(
    _bountyId: BigInt
  ): CallResult<StandardBounties__getBountyResultValue0Struct> {
    let result = super.tryCall("getBounty", [
      EthereumValue.fromUnsignedBigInt(_bountyId)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      value[0].toTuple() as StandardBounties__getBountyResultValue0Struct
    );
  }
}

export class ConstructorCall extends EthereumCall {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class SetMetaTxRelayerCall extends EthereumCall {
  get inputs(): SetMetaTxRelayerCall__Inputs {
    return new SetMetaTxRelayerCall__Inputs(this);
  }

  get outputs(): SetMetaTxRelayerCall__Outputs {
    return new SetMetaTxRelayerCall__Outputs(this);
  }
}

export class SetMetaTxRelayerCall__Inputs {
  _call: SetMetaTxRelayerCall;

  constructor(call: SetMetaTxRelayerCall) {
    this._call = call;
  }

  get _relayer(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetMetaTxRelayerCall__Outputs {
  _call: SetMetaTxRelayerCall;

  constructor(call: SetMetaTxRelayerCall) {
    this._call = call;
  }
}

export class IssueBountyCall extends EthereumCall {
  get inputs(): IssueBountyCall__Inputs {
    return new IssueBountyCall__Inputs(this);
  }

  get outputs(): IssueBountyCall__Outputs {
    return new IssueBountyCall__Outputs(this);
  }
}

export class IssueBountyCall__Inputs {
  _call: IssueBountyCall;

  constructor(call: IssueBountyCall) {
    this._call = call;
  }

  get _sender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _issuers(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }

  get _approvers(): Array<Address> {
    return this._call.inputValues[2].value.toAddressArray();
  }

  get _data(): string {
    return this._call.inputValues[3].value.toString();
  }

  get _deadline(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _token(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get _tokenVersion(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }
}

export class IssueBountyCall__Outputs {
  _call: IssueBountyCall;

  constructor(call: IssueBountyCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class IssueAndContributeCall extends EthereumCall {
  get inputs(): IssueAndContributeCall__Inputs {
    return new IssueAndContributeCall__Inputs(this);
  }

  get outputs(): IssueAndContributeCall__Outputs {
    return new IssueAndContributeCall__Outputs(this);
  }
}

export class IssueAndContributeCall__Inputs {
  _call: IssueAndContributeCall;

  constructor(call: IssueAndContributeCall) {
    this._call = call;
  }

  get _sender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _issuers(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }

  get _approvers(): Array<Address> {
    return this._call.inputValues[2].value.toAddressArray();
  }

  get _data(): string {
    return this._call.inputValues[3].value.toString();
  }

  get _deadline(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _token(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get _tokenVersion(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get _depositAmount(): BigInt {
    return this._call.inputValues[7].value.toBigInt();
  }
}

export class IssueAndContributeCall__Outputs {
  _call: IssueAndContributeCall;

  constructor(call: IssueAndContributeCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class ContributeCall extends EthereumCall {
  get inputs(): ContributeCall__Inputs {
    return new ContributeCall__Inputs(this);
  }

  get outputs(): ContributeCall__Outputs {
    return new ContributeCall__Outputs(this);
  }
}

export class ContributeCall__Inputs {
  _call: ContributeCall;

  constructor(call: ContributeCall) {
    this._call = call;
  }

  get _sender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _bountyId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class ContributeCall__Outputs {
  _call: ContributeCall;

  constructor(call: ContributeCall) {
    this._call = call;
  }
}

export class RefundContributionCall extends EthereumCall {
  get inputs(): RefundContributionCall__Inputs {
    return new RefundContributionCall__Inputs(this);
  }

  get outputs(): RefundContributionCall__Outputs {
    return new RefundContributionCall__Outputs(this);
  }
}

export class RefundContributionCall__Inputs {
  _call: RefundContributionCall;

  constructor(call: RefundContributionCall) {
    this._call = call;
  }

  get _sender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _bountyId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _contributionId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class RefundContributionCall__Outputs {
  _call: RefundContributionCall;

  constructor(call: RefundContributionCall) {
    this._call = call;
  }
}

export class RefundMyContributionsCall extends EthereumCall {
  get inputs(): RefundMyContributionsCall__Inputs {
    return new RefundMyContributionsCall__Inputs(this);
  }

  get outputs(): RefundMyContributionsCall__Outputs {
    return new RefundMyContributionsCall__Outputs(this);
  }
}

export class RefundMyContributionsCall__Inputs {
  _call: RefundMyContributionsCall;

  constructor(call: RefundMyContributionsCall) {
    this._call = call;
  }

  get _sender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _bountyId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _contributionIds(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }
}

export class RefundMyContributionsCall__Outputs {
  _call: RefundMyContributionsCall;

  constructor(call: RefundMyContributionsCall) {
    this._call = call;
  }
}

export class RefundContributionsCall extends EthereumCall {
  get inputs(): RefundContributionsCall__Inputs {
    return new RefundContributionsCall__Inputs(this);
  }

  get outputs(): RefundContributionsCall__Outputs {
    return new RefundContributionsCall__Outputs(this);
  }
}

export class RefundContributionsCall__Inputs {
  _call: RefundContributionsCall;

  constructor(call: RefundContributionsCall) {
    this._call = call;
  }

  get _sender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _bountyId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _issuerId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _contributionIds(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }
}

export class RefundContributionsCall__Outputs {
  _call: RefundContributionsCall;

  constructor(call: RefundContributionsCall) {
    this._call = call;
  }
}

export class DrainBountyCall extends EthereumCall {
  get inputs(): DrainBountyCall__Inputs {
    return new DrainBountyCall__Inputs(this);
  }

  get outputs(): DrainBountyCall__Outputs {
    return new DrainBountyCall__Outputs(this);
  }
}

export class DrainBountyCall__Inputs {
  _call: DrainBountyCall;

  constructor(call: DrainBountyCall) {
    this._call = call;
  }

  get _sender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _bountyId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _issuerId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _amounts(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }
}

export class DrainBountyCall__Outputs {
  _call: DrainBountyCall;

  constructor(call: DrainBountyCall) {
    this._call = call;
  }
}

export class PerformActionCall extends EthereumCall {
  get inputs(): PerformActionCall__Inputs {
    return new PerformActionCall__Inputs(this);
  }

  get outputs(): PerformActionCall__Outputs {
    return new PerformActionCall__Outputs(this);
  }
}

export class PerformActionCall__Inputs {
  _call: PerformActionCall;

  constructor(call: PerformActionCall) {
    this._call = call;
  }

  get _sender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _bountyId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _data(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class PerformActionCall__Outputs {
  _call: PerformActionCall;

  constructor(call: PerformActionCall) {
    this._call = call;
  }
}

export class FulfillBountyCall extends EthereumCall {
  get inputs(): FulfillBountyCall__Inputs {
    return new FulfillBountyCall__Inputs(this);
  }

  get outputs(): FulfillBountyCall__Outputs {
    return new FulfillBountyCall__Outputs(this);
  }
}

export class FulfillBountyCall__Inputs {
  _call: FulfillBountyCall;

  constructor(call: FulfillBountyCall) {
    this._call = call;
  }

  get _sender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _bountyId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _fulfillers(): Array<Address> {
    return this._call.inputValues[2].value.toAddressArray();
  }

  get _data(): string {
    return this._call.inputValues[3].value.toString();
  }
}

export class FulfillBountyCall__Outputs {
  _call: FulfillBountyCall;

  constructor(call: FulfillBountyCall) {
    this._call = call;
  }
}

export class UpdateFulfillmentCall extends EthereumCall {
  get inputs(): UpdateFulfillmentCall__Inputs {
    return new UpdateFulfillmentCall__Inputs(this);
  }

  get outputs(): UpdateFulfillmentCall__Outputs {
    return new UpdateFulfillmentCall__Outputs(this);
  }
}

export class UpdateFulfillmentCall__Inputs {
  _call: UpdateFulfillmentCall;

  constructor(call: UpdateFulfillmentCall) {
    this._call = call;
  }

  get _sender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _bountyId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _fulfillmentId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _fulfillers(): Array<Address> {
    return this._call.inputValues[3].value.toAddressArray();
  }

  get _data(): string {
    return this._call.inputValues[4].value.toString();
  }
}

export class UpdateFulfillmentCall__Outputs {
  _call: UpdateFulfillmentCall;

  constructor(call: UpdateFulfillmentCall) {
    this._call = call;
  }
}

export class AcceptFulfillmentCall extends EthereumCall {
  get inputs(): AcceptFulfillmentCall__Inputs {
    return new AcceptFulfillmentCall__Inputs(this);
  }

  get outputs(): AcceptFulfillmentCall__Outputs {
    return new AcceptFulfillmentCall__Outputs(this);
  }
}

export class AcceptFulfillmentCall__Inputs {
  _call: AcceptFulfillmentCall;

  constructor(call: AcceptFulfillmentCall) {
    this._call = call;
  }

  get _sender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _bountyId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _fulfillmentId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _approverId(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _tokenAmounts(): Array<BigInt> {
    return this._call.inputValues[4].value.toBigIntArray();
  }
}

export class AcceptFulfillmentCall__Outputs {
  _call: AcceptFulfillmentCall;

  constructor(call: AcceptFulfillmentCall) {
    this._call = call;
  }
}

export class FulfillAndAcceptCall extends EthereumCall {
  get inputs(): FulfillAndAcceptCall__Inputs {
    return new FulfillAndAcceptCall__Inputs(this);
  }

  get outputs(): FulfillAndAcceptCall__Outputs {
    return new FulfillAndAcceptCall__Outputs(this);
  }
}

export class FulfillAndAcceptCall__Inputs {
  _call: FulfillAndAcceptCall;

  constructor(call: FulfillAndAcceptCall) {
    this._call = call;
  }

  get _sender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _bountyId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _fulfillers(): Array<Address> {
    return this._call.inputValues[2].value.toAddressArray();
  }

  get _data(): string {
    return this._call.inputValues[3].value.toString();
  }

  get _approverId(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _tokenAmounts(): Array<BigInt> {
    return this._call.inputValues[5].value.toBigIntArray();
  }
}

export class FulfillAndAcceptCall__Outputs {
  _call: FulfillAndAcceptCall;

  constructor(call: FulfillAndAcceptCall) {
    this._call = call;
  }
}

export class ChangeBountyCall extends EthereumCall {
  get inputs(): ChangeBountyCall__Inputs {
    return new ChangeBountyCall__Inputs(this);
  }

  get outputs(): ChangeBountyCall__Outputs {
    return new ChangeBountyCall__Outputs(this);
  }
}

export class ChangeBountyCall__Inputs {
  _call: ChangeBountyCall;

  constructor(call: ChangeBountyCall) {
    this._call = call;
  }

  get _sender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _bountyId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _issuerId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _issuers(): Array<Address> {
    return this._call.inputValues[3].value.toAddressArray();
  }

  get _approvers(): Array<Address> {
    return this._call.inputValues[4].value.toAddressArray();
  }

  get _data(): string {
    return this._call.inputValues[5].value.toString();
  }

  get _deadline(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }
}

export class ChangeBountyCall__Outputs {
  _call: ChangeBountyCall;

  constructor(call: ChangeBountyCall) {
    this._call = call;
  }
}

export class ChangeIssuerCall extends EthereumCall {
  get inputs(): ChangeIssuerCall__Inputs {
    return new ChangeIssuerCall__Inputs(this);
  }

  get outputs(): ChangeIssuerCall__Outputs {
    return new ChangeIssuerCall__Outputs(this);
  }
}

export class ChangeIssuerCall__Inputs {
  _call: ChangeIssuerCall;

  constructor(call: ChangeIssuerCall) {
    this._call = call;
  }

  get _sender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _bountyId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _issuerId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _issuerIdToChange(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _newIssuer(): Address {
    return this._call.inputValues[4].value.toAddress();
  }
}

export class ChangeIssuerCall__Outputs {
  _call: ChangeIssuerCall;

  constructor(call: ChangeIssuerCall) {
    this._call = call;
  }
}

export class ChangeApproverCall extends EthereumCall {
  get inputs(): ChangeApproverCall__Inputs {
    return new ChangeApproverCall__Inputs(this);
  }

  get outputs(): ChangeApproverCall__Outputs {
    return new ChangeApproverCall__Outputs(this);
  }
}

export class ChangeApproverCall__Inputs {
  _call: ChangeApproverCall;

  constructor(call: ChangeApproverCall) {
    this._call = call;
  }

  get _sender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _bountyId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _issuerId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _approverId(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _approver(): Address {
    return this._call.inputValues[4].value.toAddress();
  }
}

export class ChangeApproverCall__Outputs {
  _call: ChangeApproverCall;

  constructor(call: ChangeApproverCall) {
    this._call = call;
  }
}

export class ChangeIssuerAndApproverCall extends EthereumCall {
  get inputs(): ChangeIssuerAndApproverCall__Inputs {
    return new ChangeIssuerAndApproverCall__Inputs(this);
  }

  get outputs(): ChangeIssuerAndApproverCall__Outputs {
    return new ChangeIssuerAndApproverCall__Outputs(this);
  }
}

export class ChangeIssuerAndApproverCall__Inputs {
  _call: ChangeIssuerAndApproverCall;

  constructor(call: ChangeIssuerAndApproverCall) {
    this._call = call;
  }

  get _sender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _bountyId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _issuerId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _issuerIdToChange(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _approverIdToChange(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _issuer(): Address {
    return this._call.inputValues[5].value.toAddress();
  }
}

export class ChangeIssuerAndApproverCall__Outputs {
  _call: ChangeIssuerAndApproverCall;

  constructor(call: ChangeIssuerAndApproverCall) {
    this._call = call;
  }
}

export class ChangeDataCall extends EthereumCall {
  get inputs(): ChangeDataCall__Inputs {
    return new ChangeDataCall__Inputs(this);
  }

  get outputs(): ChangeDataCall__Outputs {
    return new ChangeDataCall__Outputs(this);
  }
}

export class ChangeDataCall__Inputs {
  _call: ChangeDataCall;

  constructor(call: ChangeDataCall) {
    this._call = call;
  }

  get _sender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _bountyId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _issuerId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _data(): string {
    return this._call.inputValues[3].value.toString();
  }
}

export class ChangeDataCall__Outputs {
  _call: ChangeDataCall;

  constructor(call: ChangeDataCall) {
    this._call = call;
  }
}

export class ChangeDeadlineCall extends EthereumCall {
  get inputs(): ChangeDeadlineCall__Inputs {
    return new ChangeDeadlineCall__Inputs(this);
  }

  get outputs(): ChangeDeadlineCall__Outputs {
    return new ChangeDeadlineCall__Outputs(this);
  }
}

export class ChangeDeadlineCall__Inputs {
  _call: ChangeDeadlineCall;

  constructor(call: ChangeDeadlineCall) {
    this._call = call;
  }

  get _sender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _bountyId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _issuerId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _deadline(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class ChangeDeadlineCall__Outputs {
  _call: ChangeDeadlineCall;

  constructor(call: ChangeDeadlineCall) {
    this._call = call;
  }
}

export class AddIssuersCall extends EthereumCall {
  get inputs(): AddIssuersCall__Inputs {
    return new AddIssuersCall__Inputs(this);
  }

  get outputs(): AddIssuersCall__Outputs {
    return new AddIssuersCall__Outputs(this);
  }
}

export class AddIssuersCall__Inputs {
  _call: AddIssuersCall;

  constructor(call: AddIssuersCall) {
    this._call = call;
  }

  get _sender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _bountyId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _issuerId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _issuers(): Array<Address> {
    return this._call.inputValues[3].value.toAddressArray();
  }
}

export class AddIssuersCall__Outputs {
  _call: AddIssuersCall;

  constructor(call: AddIssuersCall) {
    this._call = call;
  }
}

export class AddApproversCall extends EthereumCall {
  get inputs(): AddApproversCall__Inputs {
    return new AddApproversCall__Inputs(this);
  }

  get outputs(): AddApproversCall__Outputs {
    return new AddApproversCall__Outputs(this);
  }
}

export class AddApproversCall__Inputs {
  _call: AddApproversCall;

  constructor(call: AddApproversCall) {
    this._call = call;
  }

  get _sender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _bountyId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _issuerId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _approvers(): Array<Address> {
    return this._call.inputValues[3].value.toAddressArray();
  }
}

export class AddApproversCall__Outputs {
  _call: AddApproversCall;

  constructor(call: AddApproversCall) {
    this._call = call;
  }
}
