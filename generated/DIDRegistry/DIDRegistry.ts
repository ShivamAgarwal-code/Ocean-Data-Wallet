

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

export class DIDAttributeRegistered extends EthereumEvent {
  get params(): DIDAttributeRegistered__Params {
    return new DIDAttributeRegistered__Params(this);
  }
}

export class DIDAttributeRegistered__Params {
  _event: DIDAttributeRegistered;

  constructor(event: DIDAttributeRegistered) {
    this._event = event;
  }

  get _did(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get _owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _checksum(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get _value(): string {
    return this._event.parameters[3].value.toString();
  }

  get _lastUpdatedBy(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get _blockNumberUpdated(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class DIDProviderRemoved extends EthereumEvent {
  get params(): DIDProviderRemoved__Params {
    return new DIDProviderRemoved__Params(this);
  }
}

export class DIDProviderRemoved__Params {
  _event: DIDProviderRemoved;

  constructor(event: DIDProviderRemoved) {
    this._event = event;
  }

  get _did(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get _provider(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get state(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class DIDProviderAdded extends EthereumEvent {
  get params(): DIDProviderAdded__Params {
    return new DIDProviderAdded__Params(this);
  }
}

export class DIDProviderAdded__Params {
  _event: DIDProviderAdded;

  constructor(event: DIDProviderAdded) {
    this._event = event;
  }

  get _did(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get _provider(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class DIDOwnershipTransferred extends EthereumEvent {
  get params(): DIDOwnershipTransferred__Params {
    return new DIDOwnershipTransferred__Params(this);
  }
}

export class DIDOwnershipTransferred__Params {
  _event: DIDOwnershipTransferred;

  constructor(event: DIDOwnershipTransferred) {
    this._event = event;
  }

  get _did(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get _previousOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _newOwner(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class DIDPermissionGranted extends EthereumEvent {
  get params(): DIDPermissionGranted__Params {
    return new DIDPermissionGranted__Params(this);
  }
}

export class DIDPermissionGranted__Params {
  _event: DIDPermissionGranted;

  constructor(event: DIDPermissionGranted) {
    this._event = event;
  }

  get _did(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get _owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _grantee(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class DIDPermissionRevoked extends EthereumEvent {
  get params(): DIDPermissionRevoked__Params {
    return new DIDPermissionRevoked__Params(this);
  }
}

export class DIDPermissionRevoked__Params {
  _event: DIDPermissionRevoked;

  constructor(event: DIDPermissionRevoked) {
    this._event = event;
  }

  get _did(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get _owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _grantee(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class OwnershipTransferred extends EthereumEvent {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class DIDRegistry__getDIDRegisterResult {
  value0: Address;
  value1: Bytes;
  value2: Address;
  value3: BigInt;
  value4: Array<Address>;

  constructor(
    value0: Address,
    value1: Bytes,
    value2: Address,
    value3: BigInt,
    value4: Array<Address>
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromAddress(this.value0));
    map.set("value1", EthereumValue.fromFixedBytes(this.value1));
    map.set("value2", EthereumValue.fromAddress(this.value2));
    map.set("value3", EthereumValue.fromUnsignedBigInt(this.value3));
    map.set("value4", EthereumValue.fromAddressArray(this.value4));
    return map;
  }
}

export class DIDRegistry extends SmartContract {
  static bind(address: Address): DIDRegistry {
    return new DIDRegistry("DIDRegistry", address);
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

  isOwner(): boolean {
    let result = super.call("isOwner", []);

    return result[0].toBoolean();
  }

  try_isOwner(): CallResult<boolean> {
    let result = super.tryCall("isOwner", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  registerAttribute(
    _did: Bytes,
    _checksum: Bytes,
    _providers: Array<Address>,
    _value: string
  ): BigInt {
    let result = super.call("registerAttribute", [
      EthereumValue.fromFixedBytes(_did),
      EthereumValue.fromFixedBytes(_checksum),
      EthereumValue.fromAddressArray(_providers),
      EthereumValue.fromString(_value)
    ]);

    return result[0].toBigInt();
  }

  try_registerAttribute(
    _did: Bytes,
    _checksum: Bytes,
    _providers: Array<Address>,
    _value: string
  ): CallResult<BigInt> {
    let result = super.tryCall("registerAttribute", [
      EthereumValue.fromFixedBytes(_did),
      EthereumValue.fromFixedBytes(_checksum),
      EthereumValue.fromAddressArray(_providers),
      EthereumValue.fromString(_value)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  getPermission(_did: Bytes, _grantee: Address): boolean {
    let result = super.call("getPermission", [
      EthereumValue.fromFixedBytes(_did),
      EthereumValue.fromAddress(_grantee)
    ]);

    return result[0].toBoolean();
  }

  try_getPermission(_did: Bytes, _grantee: Address): CallResult<boolean> {
    let result = super.tryCall("getPermission", [
      EthereumValue.fromFixedBytes(_did),
      EthereumValue.fromAddress(_grantee)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  isDIDProvider(_did: Bytes, _provider: Address): boolean {
    let result = super.call("isDIDProvider", [
      EthereumValue.fromFixedBytes(_did),
      EthereumValue.fromAddress(_provider)
    ]);

    return result[0].toBoolean();
  }

  try_isDIDProvider(_did: Bytes, _provider: Address): CallResult<boolean> {
    let result = super.tryCall("isDIDProvider", [
      EthereumValue.fromFixedBytes(_did),
      EthereumValue.fromAddress(_provider)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  getDIDRegister(_did: Bytes): DIDRegistry__getDIDRegisterResult {
    let result = super.call("getDIDRegister", [
      EthereumValue.fromFixedBytes(_did)
    ]);

    return new DIDRegistry__getDIDRegisterResult(
      result[0].toAddress(),
      result[1].toBytes(),
      result[2].toAddress(),
      result[3].toBigInt(),
      result[4].toAddressArray()
    );
  }

  try_getDIDRegister(
    _did: Bytes
  ): CallResult<DIDRegistry__getDIDRegisterResult> {
    let result = super.tryCall("getDIDRegister", [
      EthereumValue.fromFixedBytes(_did)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      new DIDRegistry__getDIDRegisterResult(
        value[0].toAddress(),
        value[1].toBytes(),
        value[2].toAddress(),
        value[3].toBigInt(),
        value[4].toAddressArray()
      )
    );
  }

  getBlockNumberUpdated(_did: Bytes): BigInt {
    let result = super.call("getBlockNumberUpdated", [
      EthereumValue.fromFixedBytes(_did)
    ]);

    return result[0].toBigInt();
  }

  try_getBlockNumberUpdated(_did: Bytes): CallResult<BigInt> {
    let result = super.tryCall("getBlockNumberUpdated", [
      EthereumValue.fromFixedBytes(_did)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  getDIDOwner(_did: Bytes): Address {
    let result = super.call("getDIDOwner", [
      EthereumValue.fromFixedBytes(_did)
    ]);

    return result[0].toAddress();
  }

  try_getDIDOwner(_did: Bytes): CallResult<Address> {
    let result = super.tryCall("getDIDOwner", [
      EthereumValue.fromFixedBytes(_did)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  getDIDRegistrySize(): BigInt {
    let result = super.call("getDIDRegistrySize", []);

    return result[0].toBigInt();
  }

  try_getDIDRegistrySize(): CallResult<BigInt> {
    let result = super.tryCall("getDIDRegistrySize", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  getDIDRegisterIds(): Array<Bytes> {
    let result = super.call("getDIDRegisterIds", []);

    return result[0].toBytesArray();
  }

  try_getDIDRegisterIds(): CallResult<Array<Bytes>> {
    let result = super.tryCall("getDIDRegisterIds", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBytesArray());
  }
}

export class RenounceOwnershipCall extends EthereumCall {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends EthereumCall {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class InitializeCall extends EthereumCall {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class RegisterAttributeCall extends EthereumCall {
  get inputs(): RegisterAttributeCall__Inputs {
    return new RegisterAttributeCall__Inputs(this);
  }

  get outputs(): RegisterAttributeCall__Outputs {
    return new RegisterAttributeCall__Outputs(this);
  }
}

export class RegisterAttributeCall__Inputs {
  _call: RegisterAttributeCall;

  constructor(call: RegisterAttributeCall) {
    this._call = call;
  }

  get _did(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _checksum(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get _providers(): Array<Address> {
    return this._call.inputValues[2].value.toAddressArray();
  }

  get _value(): string {
    return this._call.inputValues[3].value.toString();
  }
}

export class RegisterAttributeCall__Outputs {
  _call: RegisterAttributeCall;

  constructor(call: RegisterAttributeCall) {
    this._call = call;
  }

  get size(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class AddDIDProviderCall extends EthereumCall {
  get inputs(): AddDIDProviderCall__Inputs {
    return new AddDIDProviderCall__Inputs(this);
  }

  get outputs(): AddDIDProviderCall__Outputs {
    return new AddDIDProviderCall__Outputs(this);
  }
}

export class AddDIDProviderCall__Inputs {
  _call: AddDIDProviderCall;

  constructor(call: AddDIDProviderCall) {
    this._call = call;
  }

  get _did(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _provider(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class AddDIDProviderCall__Outputs {
  _call: AddDIDProviderCall;

  constructor(call: AddDIDProviderCall) {
    this._call = call;
  }
}

export class RemoveDIDProviderCall extends EthereumCall {
  get inputs(): RemoveDIDProviderCall__Inputs {
    return new RemoveDIDProviderCall__Inputs(this);
  }

  get outputs(): RemoveDIDProviderCall__Outputs {
    return new RemoveDIDProviderCall__Outputs(this);
  }
}

export class RemoveDIDProviderCall__Inputs {
  _call: RemoveDIDProviderCall;

  constructor(call: RemoveDIDProviderCall) {
    this._call = call;
  }

  get _did(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _provider(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RemoveDIDProviderCall__Outputs {
  _call: RemoveDIDProviderCall;

  constructor(call: RemoveDIDProviderCall) {
    this._call = call;
  }
}

export class TransferDIDOwnershipCall extends EthereumCall {
  get inputs(): TransferDIDOwnershipCall__Inputs {
    return new TransferDIDOwnershipCall__Inputs(this);
  }

  get outputs(): TransferDIDOwnershipCall__Outputs {
    return new TransferDIDOwnershipCall__Outputs(this);
  }
}

export class TransferDIDOwnershipCall__Inputs {
  _call: TransferDIDOwnershipCall;

  constructor(call: TransferDIDOwnershipCall) {
    this._call = call;
  }

  get _did(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _newOwner(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class TransferDIDOwnershipCall__Outputs {
  _call: TransferDIDOwnershipCall;

  constructor(call: TransferDIDOwnershipCall) {
    this._call = call;
  }
}

export class GrantPermissionCall extends EthereumCall {
  get inputs(): GrantPermissionCall__Inputs {
    return new GrantPermissionCall__Inputs(this);
  }

  get outputs(): GrantPermissionCall__Outputs {
    return new GrantPermissionCall__Outputs(this);
  }
}

export class GrantPermissionCall__Inputs {
  _call: GrantPermissionCall;

  constructor(call: GrantPermissionCall) {
    this._call = call;
  }

  get _did(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _grantee(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class GrantPermissionCall__Outputs {
  _call: GrantPermissionCall;

  constructor(call: GrantPermissionCall) {
    this._call = call;
  }
}

export class RevokePermissionCall extends EthereumCall {
  get inputs(): RevokePermissionCall__Inputs {
    return new RevokePermissionCall__Inputs(this);
  }

  get outputs(): RevokePermissionCall__Outputs {
    return new RevokePermissionCall__Outputs(this);
  }
}

export class RevokePermissionCall__Inputs {
  _call: RevokePermissionCall;

  constructor(call: RevokePermissionCall) {
    this._call = call;
  }

  get _did(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _grantee(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RevokePermissionCall__Outputs {
  _call: RevokePermissionCall;

  constructor(call: RevokePermissionCall) {
    this._call = call;
  }
}
